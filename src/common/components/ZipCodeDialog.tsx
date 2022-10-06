import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useYupValidation from 'hooks/useYupValidation'
import * as yup from 'yup'
import { useAppSelector, useAppDispatch } from 'lib/hooks'
import { getZipCodeMarket } from 'features/location'
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const validationSchema = yup.object({
    zipCode: yup.string().length(5, 'Invalid zip code'),
})

const ZipCodeDialog: React.FunctionComponent = () => {
    const { showZipCodeDialog, errorMessage } = useAppSelector((state) => state.location)
    const dispatch = useAppDispatch()
    const resolver = useYupValidation(validationSchema)
    const { register, handleSubmit, reset, setFocus } = useForm({ resolver })

    const onSubmit = (data) => {
        dispatch(getZipCodeMarket(parseInt(data.zipCode)))
    }

    useEffect(() => {
        //Focus input and reset form
        showZipCodeDialog && setFocus('zipCode')
        reset()
    }, [showZipCodeDialog, setFocus, reset])

    return (
        showZipCodeDialog && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('zipCode', {
                        onChange: (e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            e.target.value = e.target.value.slice(0, 5)
                        },
                    })}
                    id="zip-code-search"
                />
                <span>{errorMessage}</span>
                <input type="submit" />
            </form>
        )
    )
}

export default ZipCodeDialog

import axios from 'axios'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const config = {
            method: 'GET',
            url: process.env.LEGACY_API_AUTH_URL,
            headers: {
                'Content-Type': 'Application/JSON',
                Authorization: process.env.LEGACY_API_KEY,
            },
        }
        try {
            const { data } = await axios(config)
            res.status(200).send(data.response)
        } catch (err) {
            console.log(err)
        }
    }
}

export default handler
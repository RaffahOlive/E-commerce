// import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
//     const priceId = ''

//     const successUrl = `${process.env.NEXT_URL}/success`

//     const checkoutSession = await stripe.checkout.sessions.create({
//         success_url: successUrl,
//         mode: 'payment',
//         line_items: [
//             {
//                 price: priceId,
//                 quantity: 1,
//             }
//         ]
//     })

//     return res.status(201).json({
//         checkoutUrl: checkoutSession.url,
//     })
// }
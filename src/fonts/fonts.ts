import { Chakra_Petch, Poppins, Cairo } from "next/font/google";

export const chakra = Chakra_Petch({
    subsets: ["latin"],
    weight: ["400" , "500" , "600" , "700"],
    style: "normal"
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', "400" , "500" , "600" , "700", '800', '900'],
    style: "normal"
})

export const cairo = Cairo({
    subsets: ["latin"],
    weight: ['200', '300', "400" , "500" , "600" , "700", '800', '900', '1000'],
    style: "normal"
})

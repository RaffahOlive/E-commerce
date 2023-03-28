import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius quod illo iusto, ex soluta ducimus magni enim. Mollitia atque dolorem ipsa rem necessitatibus blanditiis nesciunt voluptas, quo expedita ab!</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
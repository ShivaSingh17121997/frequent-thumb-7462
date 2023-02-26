import { background, Heading } from "@chakra-ui/react";
import React from "react";

const Home = () => {
    return (
        <div>
            <div>
                <img src="https://diesel.gumlet.io/banner/1676630807Website%20Banner%20&%20Ads-01.webp?compress=true&q=70" alt="img" />
            </div>
            <Heading  >
                <h1  > MOST WANTED </h1>
                <h1> <span color={"red"} >MEN</span> | <span>WOMEN</span> </h1>
            </Heading>
            <br />
            <Heading  >
                <h1  >LOGOMANIA </h1>

            </Heading>
            <br />

            <div  >
                <img src=" https://diesel.gumlet.io/cms_images/1676638237SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_BIG%20D_16_9_300dpi_16-9_300DPI.webp?compress=true&q=70 " alt="img" />
            </div>
            <br />
            <Heading  >
                <h1  > OVAL COLLECTION </h1>

            </Heading>
            <br />
            <div  >
                <img src=" https://diesel.gumlet.io/cms_images/1676638471SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_005_4.webp?compress=true&q=70 " alt="img" />
            </div>
            <br />
            <Heading  >
                <h1  > WINTER EDIT  </h1>

            </Heading>
            <br />

            <div  >
                <img src=" https://diesel.gumlet.io/cms_images/1676639325SS23%20DROP2_LOOKBOOK%20&%20OPC%20SELL%20OUT%20CROPS_LUNAR%20NEW%20YEAR%20OF%20THE%20RABBIT%20_16_9_300dpi_DIESEL_OPC%20SS23-2_LNY%20RABBIT_FULL%20UX%2002_028_4.webp?compress=true&q=70" alt="img" />
            </div>
            <br />
            <Heading  >
                <h1  >WATCHES </h1>

            </Heading>
            <br />

            <div  >
                <img src="https://diesel.gumlet.io/cms_images/1676638608GEN6%20GRIFFED%20SMARTWATCH%20FW22_STILLS_DZT2042_JPEG_GEN6_Still_[HO22]_[DZT2042]%2016-9.webp?compress=true&q=70" alt="img" />
            </div>
            <br />
            <br />

            <footer style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",

            }} >
                <Heading>
                    <h1>Sign up to never miss an update.</h1>

                </Heading>
                <br />
                <br />
                <input placeholder='Enter your Email address' size='lg' style={{
                    backgroundColor: "white",
                    width: "50%",
                    height: "50px",
                    padding: "20px",
                    borderRadius: "10px"
                }} />
                <br />
                <br />
                <h1>
                    <h1>Sign up to never miss an update.</h1>

                </h1>
                <br />
                <br />
                <button type="button" color="red" backgroundColor={"white"} >Submit</button>
                <br />
            <br />
            </footer>
            <br />
            <br />

            <div>
                <h1>Connect with us on social media</h1>
                <h1>Instagram</h1>
                <h1>Facebook</h1>
                <h1>You Tube</h1>

            </div>



        </div>
    )
}

export default Home;
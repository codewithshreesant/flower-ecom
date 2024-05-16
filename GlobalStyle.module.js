import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    html{
        font-family: "Prompt", sans-serif;
        text-decoration: none;
    }

    @media only screen and (max-width:650px){
        html{
            font-size: 12px;
        }
        .navbar{
            flex-direction: column;
            align-items:center;
            gap: 2rem;
        }
        .item{
            display:none;
        }
        .bar{
            display: block !important;
            position:absolute;
            right:1rem;
            top:1rem;
            font-size:2rem;
        }

        .shortmenu{
            height:100vh;
            width:100vw;
            flex-direction: column;
            font-size: 1.6rem;
        }

        .shortmenu .bar{
            display: none !important;
        }

        .shortlogo{
            display:none;
        }

        .shortmenu .closeOutline{
            display: block !important;
            position:absolute;
            right:1rem;
            top:1rem;
            font-size:2rem;
        }

        .shortmenu .item{
            display: block;
            text-align: center;
        }

        .body_content{
            flex-direction: column !important;
        }

        .body_content_img{
            height: 40vh !important;
            width: 50vw !important;
        }

        .Featured{
            grid-template-columns: repeat(1,19rem) !important;
            
            img{
                height: 220px;
                width: 200px !important;
                
            }
        }

        .shop{
            grid-template-columns: repeat(1,21.5rem) !important;
        }

        .imgs img{
            height: 200px;
            width: 200px;
        }

        .Forms textarea{
            height 20rem;
            width: 20rem !important;
        }

        .SingleProduct{
            .singleitems img{
                height: 15rem !important;
                width: 15rem !important;
        
            }
        }

    }

    @media only screen and (max-width:1000px) and (min-width:650px ){
        html{
            font-size: 14px;
        }
        .shop{
            grid-template-columns: repeat(2,22rem) !important;
        }

        .imgs img{
            height: 200px;
            width: 250px;
        }

         .Featured{
            grid-template-columns: repeat(2,19rem) !important;
            
            img{
                height: 220px;
                width: 200px !important;
                
            }
        }
    }

`



import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            {/* Boostrap 5 */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

            {/* Pixel */}
            <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css"></link>
            {/* minify */}
            <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
            {/* latest */}
            <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
            {/* core style only */}
            <link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
            
            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=VT323&display=swap" rel="stylesheet" />


            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
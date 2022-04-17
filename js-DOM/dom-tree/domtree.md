# DOM Tree (Pohon DOM)
DOM tree merupakan representasi elemen elemen html di dalam browser dengan representasi sebagai pohon.

## Contoh 
### Struktur HTML
```html
<html>
    <head>
        <title>Ini Judul</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>Paragraf Pertama</p>
        <p>Paragraf Ke Dua</p>
        <div>
            <p>Paragraf Ke Tiga</p>
        </div>
        <a href="about.html">Ke Halaman About</a>
    </body>
</html>
```

### Representasi Dalam DOM Tree

## Tipe - tipe node
* Elemen 
* Attribute 
* Text
* CData Section
* Entity Reference
* Entity
* Processing Instruction
* Comment
* Document
* Document Type
* Document Fragment
* Notation

### NodeList dan HTMLCollection
* Keduanya Merupakan Kumpulan Node
* Struktur datanya mirip array
* nodeList dapat berisi node apapun, sedangkan HTMLCollection  harus berisi elemen HTML
* HTMLCollection bersifat live sedangkan nodeList tidak
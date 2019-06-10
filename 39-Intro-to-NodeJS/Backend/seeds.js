const Painting = require('./models/Painting')

Painting.sync()

const paintings = [
    {
        "title":  "Portrait of a Carthusian",
        "description": "Portrait",
        "image": "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
    },
    {
        "title": "Bust of Pseudo-Seneca",
        "description": "He is Fire, He is Death",
        "image":   "https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg",
    },
    {
        "title": "Portrait of Gerard de Lairesse",
        "description": "An uninteresting dragon",
        "image":  "https://d32dm0rphc51dk.cloudfront.net/6b4QduWxeA1kSnrifgm2Zw/medium.jpg",
    }
]

paintings.forEach(painting => Painting.create(painting) )

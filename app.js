document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'cup_noodle',
            img: 'images/cup_noodle.png'
        },
        {
            name: 'udon_zaru',
            img: 'images/udon_zaru.png'
        },
        {
            name: 'curry',
            img: 'images/curry.png'
        },
        {
            name: 'beefsteak',
            img: 'images/beefsteak.png'
        },
        {
            name: 'tenpura',
            img: 'images/tenpura.png'
        },
        {
            name: 'takoyaki',
            img: 'images/takoyaki.png'
        },
        {
            name: 'cup_noodle',
            img: 'images/cup_noodle.png'
        },
        {
            name: 'udon_zaru',
            img: 'images/udon_zaru.png'
        },
        {
            name: 'curry',
            img: 'images/curry.png'
        },
        {
            name: 'beefsteak',
            img: 'images/beefsteak.png'
        },
        {
            name: 'tenpura',
            img: 'images/tenpura.png'
        },
        {
            name: 'takoyaki',
            img: 'images/takoyaki.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/sticker_color.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/sticker_color.png')
            cards[optionTwoId].setAttribute('src', 'images/sticker_color.png')
            alert('あなたは同じ写真をクリックしました')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('あなたは同じ写真を見つけました')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/sticker_color.png')
            cards[optionTwoId].setAttribute('src', 'images/sticker_color.png')
            alert('もう一度試してください')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'おめでとうございます。すべて見つけました。'
        }
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})

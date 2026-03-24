const users = [
  {
    id: 1,
    pseudo: "RabatRigs",
    email: "contact@rabatrigs.com",
    role: "vendeur",
    note_moyenne: 4.8,
    solde: 350.00
  },
  {
    id: 2,
    pseudo: "OsamuTrigger",
    email: "border.tactics@example.com",
    role: "acheteur",
    note_moyenne: 0.0,
    solde: 1200.50
  },
  {
    id: 3,
    pseudo: "PancakeChef",
    email: "flapjacks@example.com",
    role: "vendeur",
    note_moyenne: 4.2,
    solde: 840.00
  },
  {
    id: 4,
    pseudo: "LootHunter",
    email: "loothunter@example.com",
    role: "acheteur",
    note_moyenne: 5.0,
    solde: 450.00
  },
  {
    id: 5,
    pseudo: "ArtisanDev",
    email: "artisan@example.com",
    role: "vendeur",
    note_moyenne: 3.9,
    solde: 115.00
  }
]
let announcements = []
let categories = ["electronics", "clothing", "furniture", "sports", "other"]
let conditions = ["new", "very good", "good", "acceptable"]
let statuses = ["available", "sold", "reserved"]
function publish_announce(seller_id, title, desc, price, category, condition) {
  let user = users.find(e => e.id == seller_id)
  if (!user || user.role != "vendeur") {
    console.log("User not found or isnt a sellr")
    return
  }
  if (price <= 0) {
    console.log("Price must be bigger than 0")
    return
  }
  if (!categories.includes(category.toLowerCase())) {
    console.log("Invalid category. please try again")
    return
  }
  if (!conditions.includes(condition.toLowerCase())) {
    console.log("Invalid condition. please try again")
    return
  }
  // if (!statuses.includes(status.toLowerCase())) {
  //     console.log("Invalid status. please try again")
  //     return 
  // }


  const announcement = {
    id: announcements.length + 1,
    seller_id: seller_id,
    title: title,
    description: desc,
    price: price,
    category: category,
    condition: condition,
    status: "available" 
    ,
    publishDate: new Date()

  }

  announcements.push(announcement)
  console.log(`the announcement ${announcement.title} is created ,${announcement.publishDate}`)


}

function modify_price(announcement_id, new_price) {
  let announcement = announcements.find(a => a.id == announcement_id)

  if (!announcement) {
    console.log("Announcement not found.")
    return
  }

  if (new_price <= 0) {
    console.log("The new price must be bigger than 0.")
    return
  }

  announcement.price = new_price
  console.log(`The price for "${announcement.title}" is now ${new_price}.`)
}


function delete_announce(announcement_id) {
  let index = announcements.findIndex(a => a.id == announcement_id)

  if (index == -1) {
    console.log("Announcement not found.")
    return
  }

  let title = announcements[index].title

  announcements.splice(index, 1)
  console.log(`the announcement ${title} was removed`)
}

function search_announcements(choices = {}) {
  let announcements2 = announcements.filter(a => {

    return (!choices.keyword ||
      a.title.toLowerCase().includes(choices.keyword.toLowerCase()) ||
      a.description.toLowerCase().includes(choices.keyword.toLowerCase()))
      &&
      (!choices.category ||
        a.category.toLowerCase() == choices.category.toLowerCase())
         &&

      ((!choices.minPrice || a.price >= choices.minPrice)
        &&
        (!choices.maxPrice || a.price <= choices.maxPrice))
      &&
      (!choices.condition ||
        a.condition.toLowerCase() == choices.condition.toLowerCase())
      &&
      (!choices.seller_id ||
        a.seller_id == choices.seller_id)
  })

  if (choices.sortBy) {
    announcements2.sort((a, b) => {
      switch (choices.sortBy) {
        case "price":
          return a.price - b.price

        case "date":
          return b.publishDate - a.publishDate

        case "rating":
          let sellerA = users.find(e => e.id == a.seller_id)
          let sellerB = users.find(e => e.id == b.seller_id)

          let ratingA = 0
          if (sellerA) {
            ratingA = sellerA.note_moyenne
          }

          let ratingB = 0
          if (sellerB) {
            ratingB = sellerB.note_moyenne
          }

          return ratingB - ratingA

        default:
          return 0
      }
    })
  }

  return announcements2
}
let transactions = []

function buy_announcement(buyer_id, announcement_id) {
    let buyer = users.find(e => e.id == buyer_id)
    let announcement = announcements.find(e => e.id == announcement_id)

    if (!announcement || announcement.status != "available") {
        console.log("Announcement is not available")
        return
    }

    if (!buyer || buyer.solde < announcement.price) {
        console.log("Buyer not found or  balance is not suffisant")
        return
    }

    let seller = users.find(e => e.id == announcement.seller_id)
    if (!seller) {
        console.log("Seller not found")
        return
    }

    

    buyer.solde -= announcement.price
    seller.solde += announcement.price*0.95
    announcement.status = "sold"

    let transaction = {
        date: new Date(),
        buyer_id: buyer_id,
        seller_id: seller.id,
        announcement_id: announcement_id,
        amount: announcement.price,
        commission: announcement.price*0.05
    }

    transactions.push(transaction)

    console.log(`${buyer.pseudo}  bought ${announcement.title}`)
}

let reviews = []

function rate_seller(buyer_id, seller_id, announcement_id, rating, comment) {
    if (rating < 1 || rating > 5) {
        console.log("Rating must be between 1 and 5.")
        return
    }

    
    if (!transactions.find( e=> e.buyer_id == buyer_id && e.announcement_id == announcement_id)) {
        console.log("You can only rate a seller after buying their announced item.")
        return
    }

  
    if (reviews.find(e => e.announcement_id == announcement_id)) {
        console.log("You have already rated this transaction.")
        return
    }

    let review = {
        buyer_id: buyer_id,
        seller_id: seller_id,
        announcement_id: announcement_id,
        rating: rating,
        comment: comment,
        date: new Date()
    }
    
    reviews.push(review)

    let seller = users.find(e => e.id == seller_id)
    if (seller) {
        let seller_reviews = reviews.filter(e => e.seller_id == seller_id)
        
        let seller_rating = seller_reviews.reduce((sum, e) => sum + e.rating, 0)
        seller.note_moyenne = seller_rating / seller_reviews.length
    console.log(`Review has been added , ${seller.pseudo}'s new average rating is ${seller.note_moyenne}`)

    }

}

function display_seller_profile(seller_id) {
    let seller = users.find(u => u.id == seller_id)


    if (!seller) {
        console.log("Seller not found.")
        return
    }

    let seller_reviews = reviews.filter(e => e.seller_id == seller_id)
    let sales_count = transactions.filter(e => e.seller_id == seller_id).length

    console.log(`*** Profile: ${seller.pseudo} ***`)
    console.log(`Average rating: ${seller.note_moyenne} / 5`)
    console.log(`Total Sales: ${sales_count}`)
    console.log(`Reviews received:`)
    
    if (seller_reviews.length == 0) {
        console.log("No reviews yet.")
    } else {
        seller_reviews.forEach(e => {
            console.log(`    ${e.rating}/5 : "${e.comment}"`)
        })
    }
}




//==============================

// had lpartiya glt l AI ygeneriha ghi bach nteste hadchi 

//==============================

console.log("\n--- 1. TESTING: PUBLISH ANNOUNCEMENTS ---")
// Seller 1 (RabatRigs) publishes two items
publish_announce(1, "Gaming Mouse", "RGB 10000 DPI", 50, "electronics", "new") // ID 1
publish_announce(1, "Mechanical Keyboard", "Blue switches", 100, "electronics", "new") // ID 2
// Seller 3 (PancakeChef) publishes one item
publish_announce(3, "Non-stick Pan", "Perfect for pancakes", 25, "other", "very good") // ID 3


console.log("\n--- 2. TESTING: MODIFY PRICE ---")
// Change the price of the Keyboard (ID 2) from 100 to 85
modify_price(2, 85)


console.log("\n--- 3. TESTING: DELETE ANNOUNCEMENT ---")
// Remove the Keyboard (ID 2) completely
delete_announce(2)


console.log("\n--- 4. TESTING: SEARCH ANNOUNCEMENTS ---")
// Search for electronics under 60 (Should only find the Gaming Mouse)
let search_results = search_announcements({ category: "electronics", maxPrice: 60 })
console.log("Search Results:", search_results)


console.log("\n--- 5. TESTING: BUY ANNOUNCEMENT ---")
// Buyer 2 (OsamuTrigger, starting balance 1200.50) buys ID 1 (Gaming Mouse, 50)
buy_announcement(2, 1)


console.log("\n--- 6. TESTING: RATE SELLER ---")
// Buyer 2 rates Seller 1 for announcement 1
rate_seller(2, 1, 1, 5, "Amazing mouse, perfectly clean!")
// Test the safety check (Trying to rate again should fail)
rate_seller(2, 1, 1, 4, "Trying to rate twice...")


console.log("\n--- 7. TESTING: DISPLAY SELLER PROFILE ---")
// Show RabatRigs's updated profile (Should have 1 sale and a new 5-star average)
display_seller_profile(1)
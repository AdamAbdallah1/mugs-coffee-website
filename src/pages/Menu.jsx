import React, { useState } from 'react';


import Affogato from '../assets/Affogato.jpg'
import Americano from '../assets/Americano.jpg'
import BelgianChoclate from '../assets/BelgianChoclate.jpg'
import BulkPro from '../assets/BulkPro.jpg'
import Cappussiono from '../assets/Cappussiono.jpg'
import CaramelFrappe from '../assets/CaramelFrappe.jpg'
import CaramelMacchiato from '../assets/CaramelMacchiato.jpg'
import CaramelMilkshake from '../assets/CaramelMilkshake.jpg'
import ChickenCaesarSalad from '../assets/ChickenCaesarSalad.jpg'
import ChoclateMilkshake from '../assets/ChoclateMilkshake.jpg'
import ChoclatePro from '../assets/ChoclatePro.jpg'
import CinnamonRoll from '../assets/CinnamonRoll.jpg'
import coffeeImage from '../assets/mugs-logo.svg'
import Cortado from '../assets/Cortado.jpg'
import CrabNoodlesSalad from '../assets/CrabNoodlesSalad.jpg'
import CreamySalmon from '../assets/CreamySalmon.jpg'
import CriossantAmande from '../assets/criossantAmande.jpg'
import CriossantBeurre from '../assets/CriossantBeurre.jpg'
import criossantBeurreThym from '../assets/criossantBeurreThym.jpg'
import criossantFromage from '../assets/criossantFromage.jpg'
import DarkMochaFrappe from '../assets/DarkMochaFrappe.jpg'
import DarkMocha from '../assets/DarkMocha.jpg'
import doubleespresso from '../assets/doubleespresso.jpg'
import DoubleMochaE from '../assets/DoubleMochaE.jpg'
import Espresso from '../assets/Espresso.jpg'
import flatwhite from '../assets/flatwhite.jpg'
import FlavoredLatte from '../assets/FlavoredLatte.jpg'
import FlexPro from '../assets/FlexPro.jpg'
import FuelPro from '../assets/FuelPro.jpg'
import GrapeMint from '../assets/GrapeMint.jpg'
import HalloumiPesto from '../assets/HalloumiPesto.jpg'
import HotDoubleShot from '../assets/HotDoubleShot.jpg'
import HotVanillaMathca from '../assets/HotVanillaMathca.jpg'
import IcedAmericano from '../assets/IcedAmericano.jpg'
import IcedCappuccino from '../assets/IcedCappuccino.jpg'
import IcedCaramelMacchiato from '../assets/IcedCaramelMacchiato.jpg'
import IcedDarkMocha from '../assets/IcedDarkMocha.jpg'
import IcedFlavoredLatte from '../assets/IcedFlavoredLatte.jpg'
import IcedFrenchVanilla from '../assets/IcedFrenchVanilla.jpg'
import IcedLatte from '../assets/IcedLatte.jpg'
import IcedPassionSmoothie from '../assets/IcedPassionSmoothie.jpg'
import IcedSaltedCaramel from '../assets/IcedSaltedCaramel.jpg'
import IcedSpanish from '../assets/IcedSpanish.jpg'
import IcedWhiteMocha from '../assets/IcedWhiteMocha.jpg'
import Latte from '../assets/Latte.jpg'
import LemonMint from '../assets/LemonMint.jpg'
import LotusMilkshake from '../assets/LotusMilkshake.jpg'
import MentedLemon from '../assets/MentedLemon.jpg'
import MangoIcedMatcha from '../assets/MangoIcedMatcha.jpg'
import MangoPassionSmoothie from '../assets/MangoPassionSmoothie.jpg'
import MangoSmoothie from '../assets/MangoSmoothie.jpg'
import MatchaFrappe from '../assets/MatchaFrappe.jpg'
import MixedSmoothie from '../assets/MixedSmoothie.jpg'
import mugsLogoBlack from '../assets/mugs-logo-black.svg'
import mugsLogo from '../assets/mugs-logo.svg'
import NakhleApple from '../assets/NakhleApple.jpg'
import PainAuChocolat from '../assets/PainAuChocolat.jpg'
import PainAuxRaisins from '../assets/PainAuxRaisins.jpg'
import PinkLemonSmoothie from '../assets/PinkLemonSMoothie.jpg'
import PistachioMilkshake from '../assets/PistachioMilkshake.jpg'
import QuinaoSalad from '../assets/QuinaoSalad.jpg'
import SaltedCaramelFrappe from '../assets/SaltedCaramelFrappe.jpg'
import SaltedCaramel from '../assets/SaltedCaramel.jpg'
import ShakenWhiteMocha from '../assets/ShakenWhiteMocha.jpg'
import SpanishLatte from '../assets/SpanishLatte.jpg'
import StrawberyIcedMatcha from '../assets/StrawberyIcedMatcha.jpg'
import StrawberyMilkshake from '../assets/StrawberyMilkshake.jpg'
import StrawberySmoothie from '../assets/StrawberySmoothie.jpg'
import SuisseLongueRaisin from '../assets/SuisseLongueRaisin.jpg'
import TunaSalad from '../assets/TunaSalad.jpg'
import TurkeyandCheese from '../assets/TurkeyandCheese.jpg'
import Turkish from '../assets/Turkish.jpg'
import VanillaFrappe from '../assets/VanillaFrappe.jpg'
import VanillaIcedMatcha from '../assets/VanillaIcedMatcha.jpg'
import VanillaMilkshake from '../assets/VanillaMilkshake.jpg'
import WhiteMochaFrapper from '../assets/WhiteMochaFrapper.jpg'
import WhiteMocha from '../assets/WhiteMocha.jpg'
import LabnehBaladeyeh from '../assets/LabnehBaladeyeh.jpg'
import Confetti from 'react-confetti';


const menuData = [
  {
    category: "Hot Drinks",
    items: [
      { image: Espresso, name: "Espresso", price: "$2.00" },
      { image: doubleespresso, name: "Double Espresso", price: "$3.00" },
      { image: Cortado, name: "Cortado", price: "$4.00" },
      { image: flatwhite, name: "Flat White", price: "$4.00" },
      { image: DarkMocha, name: "Dark Mocha", price: "$5.00" },
      { image: WhiteMocha, name: "White Mocha", price: "$5.00" },
      { image: Cappussiono, name: "Cappuccino", price: "$4.00" },
      {
        image: FlavoredLatte,
        name: "Flavoured Latte (Caramel - Hazelnut - Vanilla)",
        price: "$4.50"
      },
      { image: Americano, name: "Americano", price: "$4.00" },
      { image: Latte, name: "Latte", price: "$4.00" },
      { image: DoubleMochaE, name: "Double Mocha Macchiato", price: "$5.00" },
      { image: HotDoubleShot, name: "Hot Double Shot", price: "$5.00" },
      { image: IcedFrenchVanilla, name: "French Vanilla", price: "$5.00" },
      { image: CaramelMacchiato, name: "Caramel Macchiato", price: "$5.00" },
      { image: SaltedCaramel, name: "Salted Caramel", price: "$5.00" },
      { image: SpanishLatte, name: "Spanish Latte", price: "$4.50" },
      { image: Affogato, name: "Affogato (+ Vanilla Ice Cream)", price: "$5.00" },
      { image: Turkish, name: "Turkish", price: "$3.00" },
      { image: BelgianChoclate, name: "Belgian Chocolate", price: "$6.00" }
    ]
  },

  {
    category: "Iced Coffee",
    items: [
      { image: IcedLatte, name: "Iced Latte", price: "$4.00" },
      {
        image: IcedFlavoredLatte,
        name: "Flavoured Latte (Iced)",
        price: "$5.00"
      },
      { image: IcedAmericano, name: "Americano (Iced)", price: "$4.00" },
      { image: IcedSpanish, name: "Spanish (Iced)", price: "$5.00" },
      { image: IcedFrenchVanilla, name: "French Vanilla (Iced)", price: "$5.00" },
      { image: ShakenWhiteMocha, name: "Shaken White Mocha", price: "$5.00" },
      { image: IcedDarkMocha, name: "Dark Mocha (Iced)", price: "$5.00" },
      { image: IcedSaltedCaramel, name: "Salted Caramel (Iced)", price: "$5.00" },
      { image: IcedCaramelMacchiato, name: "Caramel Macchiato (Iced)", price: "$5.00" },
      { image: IcedCappuccino, name: "Cappuccino (Iced)", price: "$4.50" },
      { image: IcedWhiteMocha, name: "White Mocha (Iced)", price: "$5.00" }
    ]
  },

  {
    category: "Milkshakes",
    items: [
      { image: ChoclateMilkshake, name: "Chocolate Milkshake", price: "$5.00" },
      { image: StrawberyMilkshake, name: "Strawberry Milkshake", price: "$5.00" },
      { image: VanillaMilkshake, name: "Vanilla Milkshake", price: "$5.00" },
      { image: LotusMilkshake, name: "Lotus Milkshake", price: "$6.00" },
      {
        image: CaramelMilkshake,
        name: "Caramel Pretzels Milkshake",
        price: "$5.50"
      },
      { image: PistachioMilkshake, name: "Pistachio Milkshake", price: "$6.00" }
    ]
  },

  {
    category: "Smoothies",
    items: [
      { image: MangoSmoothie, name: "Mango Smoothie", price: "$6.00" },
      { image: StrawberySmoothie, name: "Strawberry Smoothie", price: "$6.00" },
      { image: MixedSmoothie, name: "Mixed Berries Smoothie", price: "$6.50" },
      { image: MentedLemon, name: "Minted Lemonade", price: "$5.00" },
      { image: PinkLemonSmoothie, name: "Pink Lemonade Smoothie", price: "$5.00" },
      { image: IcedPassionSmoothie, name: "Iced Passion Smoothie", price: "$6.00" },
      { image: MangoPassionSmoothie, name: "Mango Passion Smoothie", price: "$6.00" }
    ]
  },

  {
    category: "Frappe",
    items: [
      { image: CaramelFrappe, name: "Caramel Frappe", price: "$5.00" },
      { image: WhiteMochaFrapper, name: "White Mocha Frappe", price: "$5.00" },
      { image: DarkMochaFrappe, name: "Dark Mocha Frappe", price: "$5.00" },
      { image: SaltedCaramelFrappe, name: "Salted Caramel Frappe", price: "$5.00" },
      { image: VanillaFrappe, name: "Vanilla Frappe", price: "$5.00" }
    ]
  },

  {
    category: "Matcha Collection",
    items: [
      { image: HotVanillaMathca, name: "Hot Vanilla Matcha", price: "$5.00" },
      { image: VanillaIcedMatcha, name: "Vanilla Iced Matcha", price: "$5.00" },
      { image: MangoIcedMatcha, name: "Mango Iced Matcha", price: "$6.00" },
      { image: StrawberyIcedMatcha, name: "Strawberry Iced Matcha", price: "$6.00" },
      { image: MatchaFrappe, name: "Strawberry Matcha Frappe", price: "$6.00" },
      { image: MatchaFrappe, name: "Matcha Frappe", price: "$6.00" }
    ]
  },

  {
    category: "Protein Shakes",
    items: [
      { image: FlexPro, name: "Flex Pro (Peanut Butter, Banana)", price: "$7.00" },
      { image: FuelPro, name: "Fuel Pro (Strawberry, Pineapple)", price: "$7.00" },
      { image: ChoclatePro, name: "Chocolate Pro (Pure Belgian Chocolate)", price: "$7.00" },
      { image: BulkPro, name: "Bulk Pro (Mango, Pineapple)", price: "$7.00" }
    ]
  },

  {
    category: "Sandwiches",
    items: [
      { image: HalloumiPesto, name: "Halloumi Pesto", price: "$6.00" },
      { image: TurkeyandCheese, name: "Turkey and Cheese", price: "$6.50" },
      { image: CreamySalmon, name: "Creamy Salmon", price: "$9.00" },
      { image: LabnehBaladeyeh, name: "Labneh Baladeyeh", price: "$5.00" }
    ]
  },

  {
    category: "Salads",
    items: [
      { image: QuinaoSalad, name: "Quinoa Salad", price: "$6.50" },
      { image: ChickenCaesarSalad, name: "Chicken Caesar Salad", price: "$7.50" },
      { image: TunaSalad, name: "Tuna Salad", price: "$8.50" },
      { image: CrabNoodlesSalad, name: "Crab Noodles Salad", price: "$6.50" },
      { image: QuinaoSalad, name: "Mexican Salad", price: "$6.50" },
      { image: QuinaoSalad, name: "Kale Salad", price: "$6.50" }
    ]
  },

  {
    category: "Croissants",
    items: [
      { image: CriossantBeurre, name: "Croissant Beurre", price: "$3.00" },
      { image: criossantBeurreThym, name: "Croissant Beurre Thym", price: "$3.00" },
      { image: criossantFromage, name: "Croissant Beurre Fromage", price: "$3.50" },
      { image: CriossantAmande, name: "Croissant Beurre Amande", price: "$3.50" },
      { image: PainAuChocolat, name: "Pain Au Chocolat", price: "$3.50" },
      { image: CinnamonRoll, name: "Cinnamon Roll", price: "$5.00" },
      { image: PainAuxRaisins, name: "Pain Aux Raisins", price: "$5.00" },
      { image: SuisseLongueRaisin, name: "Suisse Longue Raisin", price: "$5.00" },
      { image: coffeeImage, name: "Spinach Fetta Pretzel", price: "$4.50" }
    ]
  },

  {
    category: "Desserts",
    items: [
      { image: coffeeImage, name: "Chocolate Cookie", price: "$3.50" },
      { image: coffeeImage, name: "Vanilla Cookie", price: "$3.50" },
      { image: coffeeImage, name: "Brownies", price: "$5.00" },
      { image: coffeeImage, name: "Light Free Oat Scone", price: "$3.50" },
      { image: coffeeImage, name: "Lazy Cake", price: "$5.00" },
      { image: coffeeImage, name: "Fudge Cake", price: "$4.50" },
      { image: coffeeImage, name: "Lotus Cheese Cake", price: "$4.50" },
      { image: coffeeImage, name: "Tarte", price: "$4.50" },
      { image: coffeeImage, name: "Chocolate Muffin", price: "$3.50" },
      { image: coffeeImage, name: "Banana Muffin", price: "$4.00" },
      { image: coffeeImage, name: "Vanilla Muffin", price: "$3.50" },
      { image: coffeeImage, name: "Tiramisu", price: "$5.00" },
      { image: coffeeImage, name: "High Protein Brownies", price: "$6.00" },
      { image: coffeeImage, name: "High Protein Chocolate", price: "$6.00" },
      { image: coffeeImage, name: "Carrot Cake", price: "$4.50" },
      { image: coffeeImage, name: "Oreo Cheese Cake", price: "$4.50" },
      { image: coffeeImage, name: "Honey Cake", price: "$4.50" }
    ]
  }
]


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hot Drinks");

  const category = menuData.find(cat => cat.category === selectedCategory);

  return (
    <section
      id="menu"
      className="bg-white mt-10 md:mt-20 flex flex-col p-5 justify-center items-center gap-10"
    >
      
      <h1 className="text-4xl font-extrabold text-center">Our Menu</h1>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full max-w-4xl px-2">
        {menuData.map((cat) => (
          <button
  key={cat.category}
  onClick={() => setSelectedCategory(cat.category)}
  className={`whitespace-nowrap px-4 py-3 rounded-full font-medium transition-all duration-300 mt-6 
    border ${
      selectedCategory === cat.category
        ? "bg-[#0F8B8D] text-white border-[#0F8B8D] scale-90" // smaller when selected
        : "bg-white text-[#0F8B8D] border-[#0F8B8D] hover:bg-[#0F8B8D] hover:text-white scale-100"
    }`}
>
  {cat.category}
</button>
        ))}
      </div>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {category.items.map((item) => (
          <div key={item.name} className="border-b pb-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-20 object-cover rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
              </div>

              <span className="font-bold text-lg whitespace-nowrap">
                {item.price}
              </span>
            </div>

            <p className="text-white/70 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;


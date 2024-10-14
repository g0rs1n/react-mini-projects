import { useState } from "react"


const category = [
        'all','category-1','category-2','category-3','category-4',
]

const products = [
        {
            id: 1,
            name: "Product1",
            category: "category-1",

        },
        {
            id: 2,
            name: "Product1",
            category: "category-1",
            
        },
        {
            id: 3,
            name: "Product1",
            category: "category-1",
            
        },
        {
            id: 4,
            name: "Product1",
            category: "category-1",
            
        },
        {
            id: 5,
            name: "Product2",
            category: "category-2",
            
        },
        {
            id: 6,
            name: "Product2",
            category: "category-2",
            
        },
        {
            id: 7,
            name: "Product2",
            category: "category-2",
            
        },
        {
            id: 8,
            name: "Product2",
            category: "category-2",
            
        },
        {
            id: 9,
            name: "Product3",
            category: "category-3",
            
        },
        {
            id: 10,
            name: "Product3",
            category: "category-3",
            
        },
        {
            id: 11,
            name: "Product3",
            category: "category-3",
            
        },
        {
            id: 12,
            name: "Product3",
            category: "category-3",
            
        },
        {
            id: 13,
            name: "Product4",
            category: "category-4",
            
        },
        {
            id: 14,
            name: "Product4",
            category: "category-4",
            
        },
        {
            id: 15,
            name: "Product4",
            category: "category-4",
            
        },
        {
            id: 16,
            name: "Product4",
            category: "category-4",
            
        },
]

export default function Tabs () {

    const [activeTab, setActiveTab] = useState('all')

    const filtreProducts = activeTab === 'all' ? products : 
    products.filter(product => product.category === activeTab)

    const updateTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div>
                {
                    category.map(category => {
                        return (
                            <Categories
                                category = {category}
                                updateTab = {updateTab}
                            />
                        )
                    })
                }
                {
                    filtreProducts.map(product => {
                        return (
                            <Item
                                product = {product}
                                key={product.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

function Categories ({category,updateTab}) {
    return (
        <>
            <div onClick={() => updateTab(category)} key={category}>
                <h2>
                    {category}
                </h2>
            </div>
        </>
    )
}

function Item ({product, key}) {
    return (
        <>
            <div key={key}>
                <h4>
                    {product.name}
                </h4>
            </div>
        </>
    )
}
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const Dummy_List=[{
    id:'a1',
    title:'My first book',
    price:10,
    description:"The first book"
  },
  {
    id:'a2',
    title:'My second book',
    price:15,
    description:"The second book"
  },
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_List.map((product)=>( 
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))
        }
       
      </ul>
    </section>
  );
};

export default Products;

import { Col, Row, Dropdown, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function LabelMaker() {
  const [requestedProductName, setRequestedProductName] = useState('');
  const [requestedDestination, setRequestedDestination] = useState('');

  const productList = {
    'SOURDOUGH': {
      ingredients: 'WHEAT FLOUR, RYE FLOUR, SALT, WATER',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'CHEDDAR JALAPENO SOURDOUGH': {
      ingredients: 'WHEAT FLOUR, RYE FLOUR, SALT, WATER, CHEDDAR, JALAPENO',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'GARLIC HERB SOURDOUGH': {
      ingredients: 'WHEAT FLOUR, RYE FLOUR, SALT, WATER, GARLIC, HERB DE PROVENCE',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'CRANBERRY ROSEMARY SOURDOUGH': {
      ingredients: 'WHEAT FLOUR, RYE FLOUR, SALT, WATER, CRANBERRY, ROSEMARY',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'RYE SOURDOUGH': {
      ingredients: 'WHEAT FLOUR, RYE FLOUR, SALT, WATER, CARAWAY SEEDS',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'HONEY OAT': {
      ingredients: 'WHEAT FLOUR, WATER, YEAST, HONEY, MILK, OAT, SALT, BUTTER',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'WHOLE WHEAT': {
      ingredients: 'WHEAT FLOUR, SALT, WATER, SUGAR, YEAST, BUTTER',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'WHITE WHEAT': {
      ingredients: 'WHEAT FLOUR, SALT, WATER, SUGAR, YEAST, CANOLA OIL',
      tips: 'TIP: SLICE YOUR BREAD BEFORE FREEZING IT SO YOU CAN REHEAT IT BY THE SLICE- FIRST TOAST WILL REFRESH YOUR BREAD, SECOND TOAST WILL TOAST YOUR BREAD',
      disclaimer: 'NO PRESERVATIVES- USE OR FREEZE WITHIN 5 DAYS FOR BEST FRESHNESS',
      shelfLife: 5,
    },
    'BUTTERMILK BISCUIT': {
      ingredients: 'WHEAT FLOUR, BUTTER, BAKING POWDER, SALT, BUTTERMILK, EGG',
      tips: '',
      disclaimer: 'NO PRESERVATIVES EVER',
      shelfLife: 5,
    },
    'BIG BOI RICH CHOCOLATE CHIP': {
      ingredients: 'semi-sweet chocolate chips (sugar, chocolate liquor, milkfat, cocoa butter, soy lecithin), brown sugar, butter, all-purpose flour (unbleached hard red wheat flour, malted barley flour), sugar, eggs, baking soda, salt, cornstarch',
      tips: '',
      disclaimer: 'CONTAINS: wheat, soy, dairy, egg',
      shelfLife: 7,
    },
    'BIG BOI CHOCOLATE WALNUT CHUNK': {
      ingredients: 'semi-sweet chocolate chips (sugar, chocolate liquor, milkfat, cocoa butter, soy lecithin), brown sugar, butter, all-purpose flour (unbleached hard red wheat flour, malted barley flour), walnuts, sugar, eggs, baking soda, salt, cornstarch',
      tips: '',
      disclaimer: 'CONTAINS: wheat, soy, dairy, egg',
      shelfLife: 7,
    },
    'BIG BOI DOUBLE CHOCOLATE CHUNK': {
      ingredients: 'semi-sweet chocolate chips (sugar, chocolate liquor, milkfat, cocoa butter, soy lecithin), brown sugar, butter, all-purpose flour (unbleached hard red wheat flour, malted barley flour), sugar, eggs, cocoa powder, baking soda, salt, cornstarch',
      tips: '',
      disclaimer: 'CONTAINS: wheat, soy, dairy, egg',
      shelfLife: 7,
    },
  };

  // Example wholesalers; expand this with real data as needed
  const wholesalerList = [
    { name: 'Wholesaler 1', price: '$5.00', code: 'WS001' },
    { name: 'Wholesaler 2', price: '$6.50', code: 'WS002' },
    // Add more wholesalers here
  ];

  // Compute sellByDate based on selected product
  const selectedProduct = productList[requestedProductName] || {};
  const today = new Date('2025-08-19'); // Using the provided current date; in production, use new Date()
  const sellByDate = new Date(today);
  sellByDate.setDate(today.getDate() + (selectedProduct.shelfLife || 0));
  const formattedSellByDate = sellByDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

  // Find selected wholesaler
  const selectedWholesaler = wholesalerList.find(ws => ws.name === requestedDestination) || { price: 'Wholesaler.product.price', code: 'Wholesaler.product.productCode' };

  // Handle print
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <h5>Printable Section</h5>
      <section id='printedLabel' className='border border-5 border-black m-5 p-auto'>
        <div id='customerInfoSection' className='border border-2 border-black m-3 p-4'>
          <h1>{requestedProductName || 'Product.name'}</h1>
          <p id='productIngredientListSection'>{selectedProduct.ingredients || 'Product.ingredients'}</p>
          <p id='advisorySection'>{selectedProduct.disclaimer || 'Product.useByAdvice'}</p>
          <p id='tipSection'>{selectedProduct.tips || 'Product.usageTip'}</p>
          <p id='sellByDateSection'><b>Sell By Date: {requestedProductName ? formattedSellByDate : 'sellByDate'}</b></p>
        </div>
        <div id='bakeryInfoSection'>
          <h1>BAKE THAT DOUGH</h1>
          <p>
            10700 Virginia Pine Way, Suite 106<br/>
            Knoxville, TN 37932<br/>
          </p>
        </div>
        <div id='salerInfoSection'>
          <Row>
            <Col>
              <b>{selectedWholesaler.price}</b>
            </Col>
            <Col>
              <b>Lot#: ######</b>
            </Col>
          </Row>
          <p>
            <b>{selectedWholesaler.code}</b>
          </p>
        </div>
      </section>

      {/* Dropdowns are used to select a product and wholesaler to autofill the information needed for a wholesale label */}
      <h5>Darien's Section</h5>
      <section>
        <h3>Select a product:</h3>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='productMenu'>
            {requestedProductName || 'Select a product'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.keys(productList).map((productName) => (
              <Dropdown.Item key={productName} onClick={() => setRequestedProductName(productName)}>
                {productName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <h3>Select a wholesaler:</h3>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='wholesalerMenu'>
            {requestedDestination || 'Select a wholesaler'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {wholesalerList.map((wholesaler) => (
              <Dropdown.Item key={wholesaler.name} onClick={() => setRequestedDestination(wholesaler.name)}>
                {wholesaler.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <Button variant='secondary' onClick={handlePrint}>Print Labels</Button>
    </>
  );
}
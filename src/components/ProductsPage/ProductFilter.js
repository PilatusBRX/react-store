import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;

        // lógica para incluir all - todas as companias
        let companies = new Set();
        companies.add('todos');
        for (let product in storeProducts) {
          companies.add(storeProducts[product]['company']);
        }
        companies = [...companies];
        console.log(companies);

        return (
          <div className='row my-5'>
            <div className='col-10 mx-auto'>
              <FilterWrapper>
                <div>
                  {/* text search */}
                  <label htmlFor='search'>Procurar produtos</label>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    onChange={handleChange}
                    value={search}
                    className='filter-item'
                  />
                  {/* end of text search */}
                </div>

                {/* category search */}
                <div>
                  <label htmlFor='company'>Categoria</label>
                  <select
                    name='company'
                    id='company'
                    className='filter-item'
                    value={company}
                    onChange={handleChange}
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of category search */}

                {/* price range */}
                <div>
                  <label htmlFor='price'>
                    <p className='mb-2'>
                      Preço: <span>R$ {price}</span>
                    </p>
                  </label>
                  <input
                    type='range'
                    name='price'
                    id='price'
                    min={min}
                    max={max}
                    value={price}
                    className=' range'
                    onChange={handleChange}
                    step='1'
                  />
                  <output id='rangevalue1'></output>
                </div>
                {/* end of price range */}

                {/* free shipping */}
                <div>
                  <label htmlFor='shipping' className='mx-2'>
                    Frete gratuito
                  </label>

                  <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                  <label htmlFor='shipping'>{shipping}</label>
                </div>
                {/* end of free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
  /********** input range ************* */

  .range {
    -webkit-appearance: none;
    vertical-align: middle;
    outline: none;
    border: none;
    padding: 0;
    background: none;
  }

  .range::-webkit-slider-runnable-track {
    background-color: #606670;
    height: 6px;
    border-radius: 3px;
    border: 1px solid transparent;
  }

  .range[disabled]::-webkit-slider-runnable-track {
    border: 1px solid #606670;
    background-color: transparent;
    opacity: 0.4;
  }

  .range::-moz-range-track {
    background-color: #606670;
    height: 6px;
    border-radius: 3px;
    border: none;
  }

  .range::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }

  .range::-ms-fill-lower {
    background-color: #d7dbdd;
    border-radius: 3px;
  }

  .range::-ms-fill-upper {
    background-color: #d7dbdd;
    border-radius: 3px;
  }

  .range::-ms-tooltip {
    display: none;
    /* display and visibility only */
  }

  .range::-moz-range-thumb {
    border-radius: 20px;
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    background-color: #e9bc06;
  }

  .range:active::-moz-range-thumb {
    outline: none;
  }

  .range::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: #e9bc06;
    height: 18px;
    width: 18px;
    margin-top: -7px;
  }

  .range[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid #d7dbdd;
  }

  .range:active::-webkit-slider-thumb {
    outline: none;
  }

  .range::-ms-thumb {
    border-radius: 100%;
    background-color: #e9bc06;
    height: 18px;
    width: 18px;
    border: none;
  }

  .range:active::-ms-thumb {
    border: none;
  }

  /*********  checkbox ********** */
  [type='checkbox']:checked,
  [type='checkbox']:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  [type='checkbox']:checked + label,
  [type='checkbox']:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type='checkbox']:checked + label:before,
  [type='checkbox']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: -8px;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background: #fff;
  }
  [type='checkbox']:checked + label:after,
  [type='checkbox']:not(:checked) + label:after {
    content: ' ';
    width: 8px;
    height: 8px;
    background: #e9bc06;
    position: absolute;
    top: -3px;
    left: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  [type='checkbox']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type='checkbox']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
export default ProductFilter;

import Image from 'next/image';
import React, { useState } from 'react'

import { numberToPrice } from '../../helpers/priceFormat';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { decrementProductAmount, incrementProductAmount, removeProduct } from '../../store/product.store';

import {
  Container,
  DeleteProduct,
  ImageWrapper,
  ControlsWrapper,
  Controls,
} from './styles'

type Props = {
  product: any;
}

const ProductCart = ({
  product
}: Props) => {
  const products = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const amount = products.find(p => p.id === product.id)?.amount

  const handleIncrementAmount = () => {
    dispatch(incrementProductAmount({ id: product.id }))
  }

  const handleDecrementAmount = () => {
    if (amount === 1) return
    dispatch(decrementProductAmount({ id: product.id }))
  }

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={product.photo}
          alt={product.name}
          width={60}
          height={60}
          layout='intrinsic'
          objectFit='contain'
        />
      </ImageWrapper>

      <h3>{product.name}</h3>

      <div className="responsive-wrapper">
        <ControlsWrapper>
          <p>Qtd:</p>
          <Controls>
            <button
              className={`${amount === 1 ? 'is-disabled' : ''}`}
              onClick={handleDecrementAmount}
              disabled={amount === 1}
            >
              -
            </button>
            <p>{amount}</p>
            <button onClick={handleIncrementAmount}>+</button>
          </Controls>
        </ControlsWrapper>

        <p>{numberToPrice(product.price)}</p>
      </div>

      <DeleteProduct
        data-testid="remove-cart-product"
        onClick={() => dispatch(removeProduct({ id: product.id }))}
      >x</DeleteProduct>
    </Container>
  )
}

export default ProductCart

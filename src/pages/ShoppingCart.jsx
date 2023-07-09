import React from "react";
import { Table } from "flowbite-react";
import {useSelector} from "react-redux";

const ShoppingCart = () => {

  const products = useSelector(store => store.card.shoppCart)
  console.log(products)

  return (
    <div className="flex flex-col text-center gap-12 p-4">
      <h1 className="text-4xl mt-2">Shopping cart</h1>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell>count</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>40</Table.Cell>
            <Table.Cell>
              <button className='border-2 p-1 m-1'>-</button>
              1
              <button className='border-2 p-1 m-1'>+</button></Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>Delete</p>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ShoppingCart;

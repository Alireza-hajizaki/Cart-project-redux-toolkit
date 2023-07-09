import { Dropdown, Button , Navbar ,Avatar } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';
import { Badge } from 'flowbite-react';
import {useSelector} from "react-redux";
import { Link , NavLink } from "react-router-dom";


 function NavbarWithDropdown() {

    const countProducts = useSelector(store => store.card.shoppCart)

    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href=''>
                <div className='relative'>
                <Button className='mr-4'>
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                        <NavLink to='shopping-cart'>
                          <p>
                              Buy now
                          </p>
                        </NavLink>
                </Button>
                    {countProducts.length > 0 && <Badge size="sm" className='w-[30px] h-[30px] d-flex justify-center items-center rounded-full absolute left-[6.5rem] -my-[3.1rem]'>
                        {countProducts.length >0 && countProducts.length}
                </Badge>}
                </div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={<Avatar alt="User settings" img="" rounded/>}
                >
                    <Dropdown.Header>
            <span className="block text-sm">
              Bonnie Green
            </span>
                        <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarWithDropdown;



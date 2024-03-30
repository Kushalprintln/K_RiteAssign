import React, { useEffect, useState } from "react";
import styles from './Main.module.css';
import IconBtn from "../assets/IconBtn";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { PiDropboxLogoBold } from "react-icons/pi";
import { VscSettings } from "react-icons/vsc";
import { FaRegPlusSquare } from "react-icons/fa";
import { TbDatabaseImport } from "react-icons/tb";
import Button from "../assets/Button";
import Table from "./Table";

// Importing Images
import wix from '../BrandImages/wix.png'
import shopify from '../BrandImages/shopify.png'
import mailchimp from '../BrandImages/mailchimp-sq.jpg'
import paypal from '../BrandImages/paypal.png'
import disney from '../BrandImages/monuments.png'
import intercom from '../BrandImages/intercom.png'
import google from '../BrandImages/search.png'
import evernote from '../BrandImages/evernote.png'
import microsoft from '../BrandImages/microsoft.png'
import invision from '../BrandImages/invision.png'

export default function Main({heading,loadfor}) {

    const setwidth = {
        width:loadfor === 'phone' ? '100%' : '82%'
    }

    const data = [{ brand: { img: wix, name: 'Wix' },description:'Developed A Personalised',members:['green','red','yellow','blue','yellow'],categories:[{tag:'automotion',color:'purple'}],next:{meet:'in 30 Minutes',color:'green'} },
{ brand: { img: shopify, name: 'Shopify' },description:'Introduced A Cloud-Based',members:['yellow','blue','purple','pink'],categories:[{tag:'E-commerce',color:'orange'},{tag:'B2B',color:'yellow'}],next:{meet:'Tommorrow',color:'blue'} },
{ brand: { img: mailchimp, name: 'MailChimp' },description:'Develop A Mobile App',members:['blue','yellow','purple'],categories:[{tag:'SAAS',color:'green'},{tag:'Mobile',color:'yellow'}],next:{meet:'Tommorrow',color:'blue'} },
{ brand: { img: paypal, name: 'PayPal' },description:'This Program Could Include',members:['red','yellow','purple','pink','blue'],categories:[{tag:'marketplace',color:'green'}],next:{meet:'in 6 Hours',color:'green'} },
{ brand: { img: disney, name: 'Disney' },description:'Introduce A B2B Solution',members:['green','red','yellow','blue','purple','pink'],categories:[{tag:'B2B',color:'yellow'},{tag:'B2C',color:'orange'}],next:{meet:'no contact',color:'orange'} },
{ brand: { img: intercom, name: 'Intercom' },description:'Implement A AI Driven',members:['yellow','blue','yellow','blue','yellow','purple','pink'],categories:[{tag:'technology',color:'blue'},{tag:'SAAS',color:'green'}],next:{meet:'in 1 Hour',color:'green'}},
{ brand: { img: google, name: 'Google' },description:'Offer A Comphrensive',members:['purple','pink','blue','red','red'],categories:[{tag:'finance',color:'yellow'},{tag:'automotion',color:'purple'}],next:{meet:'in 30 Minutes',color:'green'} },
{ brand: { img: evernote, name: 'Evernote' },description:'This Could Include Smart',members:['green','yellow','blue','yellow','purple','pink'],categories:[{tag:'transportation',color:'yellow'}],next:{meet:'Next Month'} },
{ brand: { img: microsoft, name: 'Microsoft' },description:'Launch An Advisory Service',members:['blue','yellow','purple','pink','purple'],categories:[{tag:'publishing',color:'purple'},{tag:'B2C',color:'orange'}],next:{meet:'no contact',color:'orange'} },
{ brand: { img: invision, name: 'Invision' },description:'The Tool would Analyse',members:['green','pink','blue','blue','yellow'],categories:[{tag:'web services',color:'blue'}],next:{meet:'Next Month'} },
]

    const [tableData,setTableData] = useState([...data]);
    const [search,setSearch] = useState('');

    function searchArray(){
        return data.filter((ele)=>{
            return search.toLowerCase() === ele.brand.name.toLowerCase()
        })
    }

    useEffect(()=>{
        if(search === ''){
            setTableData([...data]);
        }else{
            let newArr = searchArray();
            setTableData([...newArr]);
        }

    },[search])
    

    return (
        <div className={styles.mainSection} style={setwidth}>
            <nav className={styles.navbar}>
                <div className={styles.navleft}>
                    <h1>{heading}</h1>
                </div>
                <div className={styles.navright}>
                    <div className={styles.searchBar}>
                        <FaSearch />
                        <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} className={styles.searchInput} placeholder="Search For..." />
                    </div>
                    <IconBtn>
                        <RiCheckboxMultipleBlankLine />
                    </IconBtn>
                    <IconBtn>
                        <IoSettingsSharp />
                    </IconBtn>
                </div>
            </nav>
            <hr />
            <div className={styles.btnSection}>
                <div className={styles.btnleft}>
                    <Button text='All Brands' drop={true}>
                        <PiDropboxLogoBold />
                    </Button>
                    <Button text='Desk' drop={true} />
                    <Button text='Tags' drop={true} />
                    <Button text='Sort' drop={false}>
                        <FaSortAmountDownAlt />
                    </Button>
                    <Button text='Filter' drop={false}>
                        <VscSettings />
                    </Button>
                </div>
                <div className={styles.btnright}>
                    <Button text='Meeting'>
                        <FaRegPlusSquare />
                    </Button>
                    <Button text='Import/Export'>
                        <TbDatabaseImport />
                    </Button>
                </div>
            </div>
            <Table data={tableData} />
        </div>
    )
}
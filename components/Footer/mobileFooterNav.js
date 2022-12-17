import { Text, Grid, Switch, useTheme} from '@nextui-org/react';
import { useMediaQuery } from "../mediaQuery";
import { useTheme as useNextTheme } from 'next-themes'
import { faCartShopping, faShoppingBag,faHeartCirclePlus, faSearch, faStore, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MoonIcon} from '../Navbar/MoonIcon'
import {SunIcon} from '../Navbar/SunIcon'

function Mfooter(params) {
    const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
    const isMd = useMediaQuery(960);
    const collapseItems = [
        "Store",
        "Categories",
        "Latest products",
        "Our products",
        
      ];
    return(
        <>
        {isMd && 
        <Grid.Container css={{  borderTop:"white 2px solid", borderTopLeftRadius:"15px", borderTopRightRadius:"15px", background: "var(--nextui-colors-backgroundAlpha)",position:"fixed", bottom:0, height:"8.5vh", overflow:"hidden"}} >
            
            <div className="row  w-100 p-2 g-0 gap-4 d-flex justify-content-around align-items-flex-start">
                <div className="col-1 g-grid justify-content-around">
                
                
                <Text><FontAwesomeIcon size={'2x'} icon={faStore}   />Shop</Text>

                </div>
                <div className="col-1">
                
                <Text><FontAwesomeIcon icon={faHeartCirclePlus}  size={'2x'} />Wishlist</Text>
                <br/>
                

                </div>
                <div className="col-1 position-relative">
                <div  className='cartAmount'>
                1
              </div>
                
                <Text><FontAwesomeIcon size={'2x'} icon={faShoppingBag} />Bag</Text>
                <br/>
                

                </div>
                <div className="col-1">
                  <Text>
                <FontAwesomeIcon icon={faSearch} size={'2x'} />Search</Text>
                
                

                </div>
                <div className="col-1 d-flex ">
                 <div>
                 <Switch 
                 shadow color="warning"
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
      />Theme</div>

    
                

                </div>

            </div>
            
            
            
        </Grid.Container>
        }
        </>
    )
}
export default Mfooter;
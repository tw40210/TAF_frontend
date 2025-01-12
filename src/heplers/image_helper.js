import { noObjectStr } from "../data/constants";
import { heroIdMappingRev } from "../data/hero_index";
  
export const handleImagePath = (card_name) => {
if(card_name===noObjectStr){
    return "/assets/images/icons/main_icon.png"
}else{
    return `/assets/images/heros/${heroIdMappingRev[card_name]}/full_body.png`
}
};
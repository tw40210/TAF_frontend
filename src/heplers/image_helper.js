import { noObjectStr } from "../data/constants";
import { heroIdMappingRev } from "../data/hero_index";
  
export const handleHeroImagePath = (card_name) => {
if(card_name===noObjectStr){
    return "/assets/images/icons/main_icon.png"
}else{
    return `/assets/images/heros/${heroIdMappingRev[card_name]}/full_body.png`
}
};

export const handleFrameImagePath = (frame_id) => {
    return `/assets/images/frames/frame_${frame_id}.png`
    };
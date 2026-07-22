import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_winebeverage_bags_jpg_1 from '../assets/images/winebeverage_bags.jpg?url';
import asset_winebeverage_bags_jpeg_2 from '../assets/images/winebeverage_bags.jpeg?url';

export default function ProductWineBeverageBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2204 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_winebeverage_bags_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_winebeverage_bags_jpeg_2} 800w, ${asset_winebeverage_bags_jpeg_2} 300w, ${asset_winebeverage_bags_jpeg_2} 150w, ${asset_winebeverage_bags_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Wine &amp; Beverage Bags</h1>                </div>
    	                <div class="page-content">
        <p><strong>PP Woven Beverage Carrier Bag :-</strong><br>
Structured woven PP bags for one, two, four, or six bottles. PP woven construction resists the moisture, weight, and abrasion that glass bottle packaging generates and carries multiple bottles without handle or seam failure under repeated use.</p>
<p>Available with BOPP lamination in matte or gloss finish for premium full-colour brand print. Internal dividers for individual bottle protection available. PCR content options available.</p>
<p><strong>Formats:</strong> Single · Double · Four-bottle · Six-bottle<strong>&nbsp; Internal Dividers:</strong> Available&nbsp; <strong>Handles:</strong> Rope · Flat PP tape&nbsp; <strong>Lamination:</strong> Unlaminated · BOPP matte · BOPP gloss&nbsp; <strong>PCR Content:</strong> Available&nbsp; <strong>Print:</strong> Up to 4 colours · Full colour on BOPP&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Wine and spirits retail, breweries, premium beverage gifting, hospitality venues, cellar door, corporate wine programmes</p>
<p><strong>Burlap Wine Bag :-</strong><br>
Natural burlap communicates premium before the bottle is unwrapped. Available in single and twin bottle formats with drawstring or folded-top closure in natural jute cord or ribbon. Unlined for dry wine gifting or with PP laminate interior for easy cleaning after use. Natural burlap and dyed colour options available. Screen print in up to four colours.</p>
<p><strong>Formats:</strong> Single bottle · Twin bottle <strong>Closure:</strong> Drawstring · Folded-top tie <strong>Interior:</strong> Unlined · PP laminate <strong>Print:</strong> Up to 4 colours <strong>Colour Options:</strong> Natural and dyed colours available <strong>Custom Sizes:</strong> Yes <strong>Best For:</strong> Wineries, wine retailers, gift shops, hospitality, corporate wine gifting, cellar door retail</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
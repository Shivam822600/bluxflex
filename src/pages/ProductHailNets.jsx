import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_hail_nets_png_1 from '../assets/images/hail_nets.png?url';
import asset_hail_nets_300x300_png_2 from '../assets/images/hail_nets-300x300.png?url';

export default function ProductHailNets() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2217 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_hail_nets_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_hail_nets_png_1} 1024w, ${asset_hail_nets_300x300_png_2} 300w, ${asset_hail_nets_png_1} 150w, ${asset_hail_nets_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Hail Nets</h1>                </div>
    	                <div class="page-content">
        <p><strong>The One Threat That Gives No Warning</strong></p>
<p>Drought develops over weeks. Frost comes with a forecast. Insects build over a season. Hail arrives in fifteen minutes and leaves a commercial harvest unmarketable in the same time.</p>
<p>A single moderate hail event on an apple, pear, cherry, or grape crop at or near harvest can downgrade 100% of the fresh market crop to processing grade — a price reduction of 60 to 80 percent on the entire season’s investment. For premium fruit production targeting fresh market and export channels, there is no recovery within the same season.</p>
<p>Hail nets are the only commercially practical intervention that prevents this outcome at the crop level.</p>
<p><strong>➤ Knitted HDPE Hail Net</strong></p>
<p>Hail nets are knitted from high-tenacity HDPE yarns engineered to absorb and distribute hailstone impact energy across the net structure rather than transmitting it to the fruit below. The net deflects slightly under impact — absorbing kinetic energy in the knitted yarn — then returns to its geometry. The fruit receives a fraction of the impact that direct exposure delivers.</p>
<p>Hail nets are installed on permanent overhead cable systems above the crop canopy. The installation is a capital investment evaluated against the historical hail risk at the site, the crop value, and the insurance cost alternative. In high-risk hail zones producing premium fresh-market fruit, payback is typically measured in one to three seasons.</p>
<p><strong>Construction:</strong> Knitted high-tenacity HDPE&nbsp; <strong>Shade Impact:</strong> 8% – 15% light reduction — engineered for minimum shading&nbsp; <strong>Colours:</strong> White · Transparent (minimum shading) · Black&nbsp; <strong>UV Rating:</strong> 8-year · 10-year · 12-year&nbsp; <strong>Width:</strong> Custom — to row spacing and structure specification&nbsp; <strong>Length:</strong> Custom roll or cut panel&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Apples, pears, cherries, grapes, stone fruit — premium fresh-market fruit crops in high hail-risk regions</p>
<p><strong>➤ Hail + Shade Combination Net</strong></p>
<p>Combination nets provide hail protection and a defined shade percentage simultaneously — specified where both hail risk and solar radiation intensity require management in the same installation.</p>
<p><strong>Shade Percentage:</strong> 10% – 40% combined with hail protection&nbsp; <strong>Best For:</strong> Premium fruit in high-radiation, high hail-risk growing regions</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
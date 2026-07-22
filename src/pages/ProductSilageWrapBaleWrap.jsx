import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_SILAGE_WRAP_BALE_WRAP_jpg_1 from '../assets/images/SILAGE-WRAP-BALE-WRAP.jpg?url';
import asset_SILAGE_WRAP_BALE_WRAP_300x300_jpg_2 from '../assets/images/SILAGE-WRAP-BALE-WRAP-300x300.jpg?url';

export default function ProductSilageWrapBaleWrap() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2215 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_SILAGE_WRAP_BALE_WRAP_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_SILAGE_WRAP_BALE_WRAP_jpg_1} 800w, ${asset_SILAGE_WRAP_BALE_WRAP_300x300_jpg_2} 300w, ${asset_SILAGE_WRAP_BALE_WRAP_jpg_1} 150w, ${asset_SILAGE_WRAP_BALE_WRAP_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Silage Wrap &amp; Bale Wrap</h1>                </div>
    	                <div class="page-content">
        <p><strong>Preserving the Harvest Through Fermentation</strong></p>
<p>Silage is fermented forage — grass, maize, sorghum, or legumes cut at peak nutritional value and preserved under anaerobic conditions for use as livestock feed through winter and dry periods. The fermentation process that preserves silage nutritional quality requires one condition above all others: the complete exclusion of oxygen from the forage mass during the fermentation and storage period.</p>
<p>Silage film and bale wrap create and maintain that anaerobic environment. Oxygen exclusion allows lactic acid bacteria naturally present in the forage to ferment the sugars in the crop and produce lactic acid, which drops the pH and preserves the forage. Oxygen ingress stops fermentation, promotes aerobic spoilage organisms, and degrades the nutritional value and palatability of the forage — feed that cost money and labour to grow and harvest becomes waste.</p>
<p><strong>➤ Silage Pit Sheet (Stack Cover)</strong></p>
<p>Silage pit sheets are wide, thick PE films laid over silage clamps or pits, weighted and sealed at the edges to maintain anaerobic conditions throughout the fermentation and storage period. Available in black, black/white (white top surface reflects solar radiation and reduces heat build-up under the sheet in summer), and oxygen barrier grades for high-quality premium silage production.</p>
<p><strong>Construction:</strong> Multilayer PE with high oxygen barrier and UV-stabilised top layer&nbsp; <strong>Colours:</strong> Black · Black/White · Clear&nbsp; <strong>Thickness:</strong> 100 – 250 micron&nbsp; <strong>Width:</strong> Custom — to clamp or pit dimensions <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Grass silage, maize silage, wholecrop silage — dairy and beef livestock operations</p>
<p><strong>➤ Bale Wrap Film</strong></p>
<p>Bale wrap is applied to round or square bales by bale-wrapping machines immediately after baling, sealing the forage in an airtight wrap of overlapping film layers. The multilayer stretch PE construction deforms to conform tightly to the bale geometry, applying the minimum 4-layer wrap depth required for adequate oxygen exclusion.</p>
<p><strong>Construction:</strong> Multilayer stretch PE — high elongation, oxygen barrier&nbsp; <strong>Colours:</strong> Black · White · Green&nbsp; <strong>Core Size:</strong> 500 mm standard — confirmed to bale wrapping machine specification&nbsp; <strong>Thickness:</strong> 25 – 30 micron&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Round and square bale silage — grass, maize, straw, wholecrop baled forage systems</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
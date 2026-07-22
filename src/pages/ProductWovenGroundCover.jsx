import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_woven_ground_cover_png_1 from '../assets/images/woven_ground_cover.png?url';

export default function ProductWovenGroundCover() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2178 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_woven_ground_cover_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_woven_ground_cover_png_1} 1024w, ${asset_woven_ground_cover_png_1} 300w, ${asset_woven_ground_cover_png_1} 150w, ${asset_woven_ground_cover_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Woven Ground Cover</h1>                </div>
    	                <div class="page-content">
        <p>Woven polypropylene ground cover — also called weed barrier fabric or weed control fabric — is laid directly on the soil surface to suppress weed growth, retain soil moisture, and regulate soil temperature across orchards, vineyards, nurseries, berry farms, and commercial landscaping installations.</p>
<p>The woven PP fabric blocks the sunlight that weed seeds need to germinate, without sealing the soil against water and air. Rain and irrigation pass through to the root zone. The soil breathes. Roots receive moisture. Weeds do not get the light they need — and without light, they do not grow. This replaces or significantly reduces herbicide use across the growing season — a direct cost saving and, for certified organic operations, a compliance requirement.</p>
<p>The specification decision that most determines value for money is UV rating. Woven ground cover is available at 3-year, 5-year, 7-year, and 10-year UV stabilisation grades. A 3- year fabric installed in a 7-year orchard will fail structurally mid-programme. Matching the UV grade to the intended installation life is the single most important decision in ground cover procurement.</p>
<p><strong>Construction:</strong> Woven PP flat tape <strong>Weight:</strong> 50 GSM – 130 GSM <strong>UV Rating:</strong> 3-year · 5-year · 7-year · 10-year <strong>Colours:</strong> Black · White/Black (reversible) · Green <strong>Width:</strong> 0.5 m – 6 m custom <strong>Length:</strong> 25 m · 50 m · 100 m · 200 m · custom cut <strong>Perforation:</strong> Pre-perforated planting hole patterns available <strong>Custom Sizes:</strong> Yes <strong>Best For:</strong> Orchards, vineyards, berry crops, nurseries, vegetable production, commercial landscaping, weed suppression in permanent and semi-permanent plantings</p>
<h3><strong>Retail-Ready Ground Cover Packs</strong></h3>
<p>The same woven PP ground cover fabric supplied to commercial growers in bulk rolls is available in retail-packaged formats for garden centres, hardware retailers, home improvement stores, and e-commerce platforms.</p>
<p>Standard retail formats are 50-foot rolls — the dimension compatible with standard domestic garden bed layouts in North American and European retail markets — in consumer-friendly widths packed in a printed polybag or printed sleeve with product name, coverage area, installation instructions, and brand information on the face. Every element of the retail pack is customisable. Roll dimensions, fabric specification, packaging material, print design, barcode, and private-label branding are all confirmed to your retail buyer’s requirements. We supply retail-ready product to buyers entering or expanding in the garden retail channel, with volumes and replenishment formats structured for retail buying cycles.</p>
<p><strong>Standard Retail Formats:</strong> 3 ft × 50 ft (approx. 0.9 m × 15 m) 4 ft × 50 ft (approx. 1.2 m × 15 m) 6 ft × 50 ft (approx. 1.8 m × 15 m) Custom retail dimensions on request</p>
<p><strong>Retail Pack Options:</strong> Printed polybag · Printed header with hang hole · Colour box · Retail sleeve Private-label and custom branding on all formats</p>
<p>Enquire about your retail packaging requirements →</p>
<p><strong>Best For:</strong> Garden centre retail, hardware and home improvement retail, e-commerce, private-label garden product programmes.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
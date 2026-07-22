import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_crop_covers_jpg_1 from '../assets/images/crop_covers.jpg?url';

export default function ProductCropCovers() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1650 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_crop_covers_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_crop_covers_jpg_1} 945w, ${asset_crop_covers_jpg_1} 297w, ${asset_crop_covers_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Crop Covers</h1>                </div>
    	                <div class="page-content">
        <p><strong>Season Extension Without a Structure</strong></p>
<p>A crop cover — also called a row cover or floating row cover — is a lightweight woven or spunbond fabric laid directly over crops or supported on low hoops above them. It creates a protected microclimate around the crop without requiring a permanent greenhouse structure — raising temperature, excluding insects, blocking wind, and protecting against light frost, all simultaneously.</p>
<p>For growers who want the production benefits of protected cultivation without the capital cost of a permanent greenhouse, crop covers are the most accessible and most flexible tool available. They can be deployed and removed in a single operation, reused across multiple seasons, and applied to any field crop regardless of layout or spacing.</p>
<p><strong>➤ Woven PP Crop Cover</strong></p>
<p>Woven polypropylene crop cover fabric provides frost protection to approximately -2°C to -4°C, insect exclusion, and wind protection for low-growing vegetable, herb, and fruit crops. The woven construction is more durable and longer-lived than lightweight nonwoven alternatives, with UV stabilisation for multi-season reuse.</p>
<p><strong>Construction:</strong> Woven PP — lightweight, permeable&nbsp; <strong>Frost Protection:</strong> -2°C to -4°C depending on fabric weight and deployment&nbsp; <strong>Light Transmission:</strong> 80% – 90%&nbsp; <strong>Insect Exclusion:</strong> Yes — mesh aperture to pest exclusion requirement&nbsp; <strong>UV Rating:</strong> 2-year, 3-year&nbsp; <strong>Width:</strong> Custom — to bed or row width&nbsp; <strong>Length:</strong> Custom rolls&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Vegetables, herbs, strawberries, early-season and late-season extension, frost protection, wind protection, organic crop production</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
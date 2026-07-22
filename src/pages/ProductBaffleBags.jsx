import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Diaper_Bag_jpg_1 from '../assets/images/Diaper-Bag.jpg?url';
import asset_Diaper_Bag_297x300_jpg_2 from '../assets/images/Diaper-Bag-297x300.jpg?url';

export default function ProductBaffleBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-846 product type-product status-publish has-post-thumbnail hentry product_category-fibc">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Diaper_Bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Diaper_Bag_jpg_1} 945w, ${asset_Diaper_Bag_297x300_jpg_2} 297w, ${asset_Diaper_Bag_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Baffle Bags</h1>                </div>
    	                <div class="page-content">
        <p>We offer premium-quality Baffle Bags that are specially engineered to maintain a square shape even after filling. With internal baffle panels, these bags optimize storage space, improve stacking efficiency, and reduce transportation costs.</p>
<p>Made from durable woven polypropylene fabric, our baffle bags are perfect for fine and flowable materials like powders and granules. If you are looking for better space utilization and safer bulk handling, our baffle bags are the ideal solution.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
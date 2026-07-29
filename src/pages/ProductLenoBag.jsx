import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_leno_bag_jpg_1 from '../assets/images/official/leno-bag.jpeg?url';
import asset_leno_bag_jpeg_2 from '../assets/images/official/leno-bag.jpeg?url';

export default function ProductLenoBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1734 product type-product status-publish has-post-thumbnail hentry product_category-leno-bags-febric">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_leno_bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_leno_bag_jpeg_2} 945w, ${asset_leno_bag_jpeg_2} 297w, ${asset_leno_bag_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Leno Bag</h1>                </div>
    	                <div class="page-content">
        <p><em>Detailed specifications for Leno Bag are being finalized and will be added shortly. Contact our team for current product information, availability, and pricing.</em></p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
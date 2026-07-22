import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Diaper_Bag_1_jpg_1 from '../assets/images/Diaper-Bag-1.jpg?url';
import asset_Diaper_Bag_1_297x300_jpg_2 from '../assets/images/Diaper-Bag-1-297x300.jpg?url';

export default function ProductDiaperBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-852 product type-product status-publish has-post-thumbnail hentry product_category-fibc">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Diaper_Bag_1_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Diaper_Bag_1_jpg_1} 945w, ${asset_Diaper_Bag_1_297x300_jpg_2} 297w, ${asset_Diaper_Bag_1_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Diaper Bag</h1>                </div>
    	                <div class="page-content">
        <p>We provide high-performance Diaper Bags that are specially designed to handle moisture-rich or semi-liquid materials. These bags come with absorbent layers that effectively control leakage and maintain cleanliness during transport and storage.</p>
<p>Ideal for industries like food processing, agriculture, and waste management, our diaper bags ensure safe, hygienic, and efficient handling of challenging materials.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
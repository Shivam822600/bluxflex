import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_C_Conductive_Bag_jpg_1 from '../assets/images/C-Conductive-Bag.jpg?url';
import asset_C_Conductive_Bag_297x300_jpg_2 from '../assets/images/C-Conductive-Bag-297x300.jpg?url';

export default function ProductCConductiveBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-853 product type-product status-publish has-post-thumbnail hentry product_category-fibc">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_C_Conductive_Bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_C_Conductive_Bag_jpg_1} 945w, ${asset_C_Conductive_Bag_297x300_jpg_2} 297w, ${asset_C_Conductive_Bag_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">UN Bag</h1>                </div>
    	                <div class="page-content">
        <p>Our UN Certified Bags are designed for the safe and compliant transportation of hazardous and sensitive materials. Manufactured using high-quality woven polypropylene, these bags meet strict international UN standards, ensuring maximum strength, durability, and protection.</p>
<p>They are rigorously tested for impact, load-bearing capacity, and leakage resistance. Ideal for chemical, pharmaceutical, and agro industries, our UN bags give you complete confidence in handling and shipping hazardous goods safely across global markets.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
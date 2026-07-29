import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_wileted_leno_bag_jpg_1 from '../assets/images/official/wileted-leno-bag.jpeg?url';
import asset_wileted_leno_bag_jpeg_2 from '../assets/images/official/wileted-leno-bag.jpeg?url';

export default function ProductWiletedLenoBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1710 product type-product status-publish has-post-thumbnail hentry product_category-leno-bags-febric">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_wileted_leno_bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_wileted_leno_bag_jpeg_2} 945w, ${asset_wileted_leno_bag_jpeg_2} 297w, ${asset_wileted_leno_bag_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Wicketed Leno Bag</h1>                </div>
    	                <div class="page-content">
        <p><strong>Speed Meets Freshness on Every Packing Line</strong></p>
<p>The Wicketed Leno Bag is designed for high-speed packing operations. Pre-cut and mounted on metal wicket wires, these bags slot directly into automated and semi-automatic bagging machines, allowing operators to fill, seal, and move on quickly.</p>
<p>Beyond fill speed, the open mesh structure allows the produce inside to breathe — releasing heat and moisture during the journey from packing house to supermarket shelf. For perishable goods, this breathability supports the produce arriving in better condition.</p>
<p>These bags are commonly used for onions, potatoes, garlic, ginger, citrus fruits, cabbage, carrots, and a wide range of other agricultural produce. They are equally well-suited for seafood like crawfish and shellfish, and for firewood and nuts where airflow and visibility matter. The open weave means buyers can inspect the product without ever opening the bag a feature that builds trust on the retail floor.</p>
<p>Made from virgin polypropylene, they are strong, lightweight, mould-resistant, and available in a full range of sizes, colours, and custom print options. Closure options include drawstrings and Kwik Lok closures depending on the operation. Whether you run a high-volume packing facility or a medium-scale agricultural export business, the wicketed leno bag delivers consistency, speed, and freshness in one clean package.</p>
<p><strong>Ideal For:</strong> Fresh produce exporters, agricultural packing facilities, supermarket supply chains, seafood and fisheries packaging, firewood distributors, and nut processors.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}
# Anala Art

This is a cross platform mobile app created in Ionic-React by a husband and wife paired programming team: Nathan and Faith Tarbert. 

Anala Art consists of a free, curated collection of ORIGINAL (never been uploaded online), analog mixed media art images. In art, analog means created/painted by hand, not digitally created. These images are then scanned in as hi-res, digital wallpapers. The user can view the collection and download any image(s), sized for their device, as a free wallpaper. 

The images are updated continuously from contributing analog artists looking for exposure and to create a community around their art. The artists can upload their images as just a digital wallpaper or also provide it as a minted NFT for purchase inside the app. If purchased, the hi-res TIFF image will be provided to the purchaser. The purchaser can opt to have the image removed from the collection entirely or the owner attribution changed. They could in turn offer the art for resale - all while the artist retains attribution and any royalties they set.

Users can up-vote their favorite image(s) and artists can view how many times each of their images were downloaded, getting real-time feedback from public opinion. Users can also search image tags to find new artists and images with a similar look and style. Over time, images with zero likes and downloads will be retired to keep the collection fresh and responsive.

User, image and artist data is stored in Firestore. User Auth is via Firebase. A future artist management portal would also be handled by Firestore/Firebase. NFT minting is handled by initiating a smart contract using a modified OpenZeppelin library <by Nathan, who is passionate about blockchain>, transacting on the Kovan Testnet in the Ethereum Network. NFT verification is handled by Etherscan.

Initial, mixed media analog artwork is created by Faith, a mixed-media artist <who love to code!>.

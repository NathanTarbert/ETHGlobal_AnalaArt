import firebase from 'firebase/app';

export interface Entry {
  id: string;
  date_uploaded: string;
  downloads: [];
  is_nft: string;
  likes: [];  
  private_tiff: string;
  public_jpg: string;
  tags: [];
  trans_hash: string 
}

export function toEntry(doc: firebase.firestore.DocumentSnapshot): Entry {
  return { id: doc.id, ...doc.data() } as Entry;
}

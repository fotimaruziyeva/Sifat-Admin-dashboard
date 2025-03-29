export interface Product {
    id: number;
    price: number;
    count: number;
    futures: string;
    name: string;
    description: string;
    dis_count_price: number;
    view_count: number;
    subcategory_id: Subcategory[];
    comments: Comment[];
    attributes: Attribute[];
}

export interface Comment {
    id: number;
    comment_date: string;
    dislikes: number;
    writer_name: string;
    star_rating: number;
    likes: number;
    product_id: Product[];
}

export interface Attribute {
    id: number;
    name: string;
    product_id: Product[];
    characteristic: {
        label: string;
        price: string;
        count: string;
    }[];
}

export interface Category {
    id: number;
    name: string;
    description: string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: number;
    name: string;
    description: string;
    category_id: number;
    products: Product[];
}

export interface Coupons {
    id:number                                      
    name: string;
    discount: number;
    date: string;
    min_amount: number;
    is_active: boolean;
  }
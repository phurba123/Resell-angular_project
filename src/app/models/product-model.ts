interface ImagesUrl {
    url: string
}

export interface Product {
    _id?: string | null | undefined,
    title: string,
    description?: string,
    categoryTypeId: any,
    categoryTypeName: string,
    price: number,
    location: string,
    featuredImgUrl?: string,
    imagesUrl?: ImagesUrl[],
    createdOn?: Date | string,
    updatedOn?: Date | string,
    postedByUserId: any,
    postedByUserName: string
}
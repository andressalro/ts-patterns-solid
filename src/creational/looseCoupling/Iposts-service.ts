import { IExportPostsService } from "./Iexport-posts-service";
import { Post } from "./post";
export interface IPostsService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
    export(service: IExportPostsService): Promise<string>;
}
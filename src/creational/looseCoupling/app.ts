import { JsonExportService } from './json-export-service';
import { MockPostsService } from './MockPostsService';
// import { NewsFeed } from './NewsFeed';

let mockService = new MockPostsService()
mockService.export(new JsonExportService()).then(result => console.log(result))
// let newsFeed = new NewsFeed(new MockPostsService());
// newsFeed.show();
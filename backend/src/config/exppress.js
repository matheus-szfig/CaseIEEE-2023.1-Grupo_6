import exppress, {
  urlencoded,
  json
} from 'express';

import cookieParser from 'cookie-parser';
import router from '../core/router';

const app = exppress();

app.use(urlencoded({extended:true}));
app.use(json());
app.use(cookieParser())

app.use(router);

export default app;
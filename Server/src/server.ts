process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';

import EmployeeRoute from '@routes/employees.route';
import IndexRoute from '@routes/index.route';

import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new EmployeeRoute()]);

app.listen();

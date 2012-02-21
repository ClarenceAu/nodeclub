/**
 * config
 */

exports.config = {
	name: 'Node Club',
	description: 'Node Club 是用Node.js开发的社区软件',
	host: 'http://127.0.0.1/',
	db: 'mongodb://127.0.0.1/node_club',
	session_secret: 'node_club',
	auth_cookie_name: 'node_club',
	port: 8080,
	version: '0.0.1',

	// topics list count
	list_topic_count: 20,

	// mail SMTP
	mail_port: 25,
	mail_user: 'ozhencong@gmail.com',
	mail_pass: 'clarenceau0119',
	mail_host: 'smtp.gmail.com',
	mail_sender: 'ozhencong@gmail.com',
	mail_use_authentication: true,
	
	//weibo app key
	weibo_key: 10000000,

	// admins
	admins: {admin:true}
};


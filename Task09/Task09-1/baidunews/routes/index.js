var express = require('express');
var router = express.Router();
var orm = require('orm');//采用ORM框架

var dburl = "mysql://root:123456@127.0.0.1/baidunews";//数据库地址


//转发请求至指定界面
router.get('/index', function(req, res, next) {
    res.render('index', {});
});

//查询推荐新闻
router.use('/news_recommend', orm.express(dburl, 
{
    define: function(db, models, next) {
        models.news_recommend = db.define("news_recommend", 
		{
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_recommend', function(req, res, next) 
{
    var findNum = req.query.findNum;
    var offset = req.query.offset;
    req.models.news_recommend.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

//查询百家新闻信息
router.use('/news_baijia', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_baijia = db.define("news_baijia", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_baijia', function(req, res, next) {
    var findNum = req.query.findNum;
    var offset = req.query.offset;
    req.models.news_baijia.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

//查询本地新闻
router.use('/news_local', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_local = db.define("news_local", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_local', function(req, res, next) {
    var findNum = req.query.findNum;
    var offset = req.query.offset;
    req.models.news_local.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

//查询互联网新闻
router.use('/news_internet', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_internet = db.define("news_internet", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_internet', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_internet.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});

//查询科技新闻
router.use('/news_science', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_science = db.define("news_science", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_science', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_science.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


//查询女人新闻
router.use('/news_woman', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_woman = db.define("news_woman", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_woman', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_woman.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


//查询图片新闻
router.use('/news_picture', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_picture = db.define("news_picture", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_picture', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_picture.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


//查询军事新闻
router.use('/news_military', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_military = db.define("news_military", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_military', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_military.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


//查询社会新闻
router.use('/news_society', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_society = db.define("news_society", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_society', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_society.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


//查询娱乐新闻
router.use('/news_entertainment', orm.express(dburl, {
    define: function(db, models, next) {
        models.news_entertainment = db.define("news_entertainment", {
            id: {
                type: 'serial',
                key: true
            },
            title: String,
            img_url: String,
            content: String,
            from: String,
            time: String
        });
        next();
    }
}));
router.get('/news_entertainment', function(req, res, next) {
    console.log(req.query.findNum);
    var findNum = req.query.findNum;
    console.log(req.query.offset);
    var offset = req.query.offset;
    req.models.news_entertainment.find({}, {
        offset: offset
    }, 5, ["time", "Z"], function(err, news) {
        res.status(200);
        res.json(news);
    });
});


module.exports = router;
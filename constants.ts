import { Category, Rule, Principle } from './types';

export const PRINCIPLES: Principle[] = [
  {
    id: 1,
    title: "不做我不懂的事 (能力边界)",
    description: "看不懂 ≠ 没机会，但看不懂 = 风险无限大。用'不参与'代替'错误参与'。",
    relatedRules: [1, 2, 4, 19, 29, 30, 35, 39, 40, 58, 63, 65, 79],
    iconName: "CircleOff"
  },
  {
    id: 2,
    title: "不跟人性对赌 (反短期/反投机)",
    description: "不和市场情绪对赌，不和短期刺激对赌。站在概率更高的一侧。",
    relatedRules: [3, 17, 18, 28, 41, 47, 57, 64, 71, 73],
    iconName: "TrendingUp"
  },
  {
    id: 3,
    title: "不牺牲长期价值 (长期主义)",
    description: "核心判断：这件事是否还能10年、20年后依然成立？",
    relatedRules: [6, 7, 8, 10, 11, 12, 14, 24, 33, 45, 46, 49, 56, 59, 72, 78],
    iconName: "Hourglass"
  },
  {
    id: 4,
    title: "文化与人 > 策略",
    description: "文化一旦烂掉，所有 KPI 都是幻觉。人是核心变量。",
    relatedRules: [9, 15, 23, 31, 32, 36, 38, 48, 50, 54, 55, 56, 62, 76],
    iconName: "Users"
  },
  {
    id: 5,
    title: "纠错速度 > 正确率",
    description: "并不追求不犯错，而是一旦确认是错的，就立刻停。",
    relatedRules: [25, 27, 51, 60, 70, 75],
    iconName: "RefreshCcw"
  },
  {
    id: 6,
    title: "安全感是理性的前提",
    description: "没有安全感，所有'理性决策'都是假命题。",
    relatedRules: [13, 28, 36, 52, 56, 62, 68, 70],
    iconName: "ShieldCheck"
  }
];

export const RULES: Rule[] = [
  // --- Investment ---
  { id: 1, category: Category.Investment, title: "不做不懂的投资", description: "不懂生意，跟你讲多少理论也是白讲，不懂最好不要碰。" },
  { id: 2, category: Category.Investment, title: "不看图看线", description: "我是工科出身都看不懂那些图线，想通过看图看线炒股赚钱的人，就是铁铁的韭菜。" },
  { id: 3, category: Category.Investment, title: "不听市场噪音", description: "不要天天看市场动态，不要关心“今天要涨了”、“明天要掉了”。" },
  { id: 4, category: Category.Investment, title: "不盲目抄作业", description: "抄作业是滞后的，你不知道我买的多还是少，也不知道我什么时候卖。" },
  { id: 5, category: Category.Investment, title: "不All in别人的作业", description: "看到别人买了你就All in，这肯定错了。" },
  { id: 6, category: Category.Investment, title: "不投商业模式不好的公司", description: "如通用电气（GE），商业模式不好，不符合过滤器。" },
  { id: 7, category: Category.Investment, title: "不投没有差异化的行业", description: "如航空公司，A到B大家都一样，最后只能靠价格战。" },
  { id: 8, category: Category.Investment, title: "不投“同质化竞争”的生意", description: "如大部分电动车企业，卷到最后大部分都会死掉。" },
  { id: 9, category: Category.Investment, title: "不投不喜欢的CEO", description: "投资是跟人做朋友，如果不喜欢这个人的品行，哪怕给钱也不干。" },
  { id: 10, category: Category.Investment, title: "不长期持有油气指数", description: "指数和油价关联度不是100%，长期持有会有巨大的时间损耗。" },
  { id: 11, category: Category.Investment, title: "不因为“便宜”而买", description: "不要因为市盈率低就买（如五粮液），除非你真懂那个生意。" },
  { id: 12, category: Category.Investment, title: "不因为“贵”而卖", description: "决定投资的不是市盈率，而是未来现金流。如果卖了没地方去，不如拿着。" },
  { id: 13, category: Category.Investment, title: "不持有现金（如果有更好标的）", description: "拿着现金很难受，除非没有好的投资机会。" },
  { id: 14, category: Category.Investment, title: "不该为了卖而卖", description: "如果手里只有茅台，除非看懂了更好的且能无缝切换，否则没道理卖。" },
  { id: 15, category: Category.Investment, title: "不碰“烂文化”的公司", description: "如果一家公司文化烂掉了（如诺基亚），管理救不了它。" },
  { id: 16, category: Category.Investment, title: "不预测宏观环境", description: "投资不需要看宏观环境，投资本来就是看十年、二十年。" },
  { id: 17, category: Category.Investment, title: "不和AI比短线", description: "量化基金和AI在交易上速度非常快，散户做日内交易打不过它们。" },
  { id: 18, category: Category.Investment, title: "不该把投资想得太复杂", description: "买股票就是买公司，这句话能懂的人不到1%。" },
  { id: 19, category: Category.Investment, title: "不把运气当能力", description: "大部分公司都不容易看懂，不懂的人也能赚钱，但那是运气。" },
  { id: 20, category: Category.Investment, title: "不应该只有一种持仓", description: "如果你不懂，可以买标普500指数或者伯克希尔。" },
  { id: 21, category: Category.Investment, title: "不乱买指数", description: "指数有好多种，不是所有指数都可以买，要买标普500或纳斯达克100这种。" },
  { id: 22, category: Category.Investment, title: "不轻信道听途说", description: "有人信誓旦旦说苹果要做电视，但我知道它们绝不会做，因为没有价值。" },
  { id: 23, category: Category.Investment, title: "不忽视“隐形”的竞争壁垒", description: "如茅台的口味惯性和文化，很难被改变。" },
  { id: 24, category: Category.Investment, title: "不错过时代变革", description: "AI起来后发现它是工业革命，要参与一下。" },
  { id: 25, category: Category.Investment, title: "不犹豫纠错", description: "发现看错了（如油气指数），要马上改，通通卖掉，不要怕亏损。" },
  { id: 26, category: Category.Investment, title: "不把分红当恩赐", description: "分红是股东本来该拿的，不是公司的恩赐。" },
  { id: 27, category: Category.Investment, title: "不要想“以后”再买", description: "如果你知道它能赚那么多钱，哪怕晚一点也会多买，不会卖。" },
  { id: 28, category: Category.Investment, title: "不被股价波动吓跑", description: "一个股票要是扛不住掉50%，你就不应该买。" },
  { id: 29, category: Category.Investment, title: "不强求搞懂所有公司", description: "搞懂什么都难，搞不懂也没关系，不投就是了。" },
  { id: 30, category: Category.Investment, title: "不要觉得自己是特殊的", description: "80%的散户在牛市熊市都亏钱，不要觉得自己例外。" },

  // --- Business ---
  { id: 31, category: Category.Business, title: "不做不讲诚信的事", description: "没有契约，就不可信，有一次两次，绝不会有第三次。" },
  { id: 32, category: Category.Business, title: "不给空头支票", description: "不能兑现承诺，大家就不会跟你干。" },
  { id: 33, category: Category.Business, title: "不做“不健康、不长久”的事", description: "凡是不健康不长久的事都不做。" },
  { id: 34, category: Category.Business, title: "不只问“有没有钱赚”", description: "首先要问“这是不是件对的事情”，如果不对，给钱也不做。" },
  { id: 35, category: Category.Business, title: "不做不擅长的事", description: "不做代工，因为觉得不擅长，打不过郭台铭。" },
  { id: 36, category: Category.Business, title: "不该让员工吃亏", description: "如果要倒闭，不能让员工吃亏，不能让供应商吃亏。" },
  { id: 37, category: Category.Business, title: "不要让股东觉得分红是恩赐", description: "员工拿奖金也不需要谢老板，这是按契约该拿的。" },
  { id: 38, category: Category.Business, title: "不留价值观不合的人", description: "价值观不认同，这事没法干，不认同的人慢慢会被淘汰。" },
  { id: 39, category: Category.Business, title: "不该看“倒后镜”做决策", description: "做决策不要总是想前任怎么做，那是背着包袱，眼睛没看未来。" },
  { id: 40, category: Category.Business, title: "不应该让接班人想“我会怎么做”", description: "要想“若是那样我们早完了”。" },
  { id: 41, category: Category.Business, title: "不盲目追求市场占有率", description: "太注重市场占有率和生意，不注重用户，所以死掉了。" },
  { id: 42, category: Category.Business, title: "不抗拒放权", description: "我当CEO的时候就不太管，让他们做决定，我不怕他们犯错。" },
  { id: 43, category: Category.Business, title: "不该事必躬亲", description: "我喜欢打球，他们喜欢工作，那就让他们做，我为什么要待在办公室？" },
  { id: 44, category: Category.Business, title: "不忽视新技术的冲击", description: "智能机来得太凶猛，如果不够敏感，会差点死掉。" },
  { id: 45, category: Category.Business, title: "不做无法提供价值的产品", description: "如果发现无法给用户增加足够价值，所以不做。" },
  { id: 46, category: Category.Business, title: "不乱改核心产品", description: "不需要变就不要变。乱改核心产品是脑袋坏了。" },
  { id: 47, category: Category.Business, title: "不把“创新”当成绝对真理", description: "创新是为了满足用户需求，如果用户不需要变，就不要乱创新。" },
  { id: 48, category: Category.Business, title: "不做“弱智”的产品", description: "改得很难用，这种产品说明文化烂掉了。" },
  { id: 49, category: Category.Business, title: "不该为了生意而做产品", description: "因为不能增加价值所以不做，这是好文化。" },
  { id: 50, category: Category.Business, title: "不忽视“不为清单”", description: "之所以成为我们，很大原因是因为我们不做的那些事情。" },
  { id: 51, category: Category.Business, title: "不该对错误迟钝", description: "虽然会犯错，但知道是错的就要停止，几十年下来就少犯很多错。" },
  { id: 52, category: Category.Business, title: "不该忽视现金流安全", description: "账面现金掉得很快时，要有投资作为后备役部队。" },
  { id: 53, category: Category.Business, title: "不排斥“笨”办法", description: "我们的东西都很大白话，本分、诚信、用户导向。" },

  // --- Education ---
  { id: 54, category: Category.Education, title: "不打孩子", description: "打孩子解决不了问题，还会破坏亲子关系。" },
  { id: 55, category: Category.Education, title: "不骂孩子", description: "你骂他就是教他骂人，你打他就是教他将来打孩子。" },
  { id: 56, category: Category.Education, title: "不破坏安全感", description: "父母做的所有事都是为了增加安全感，没有安全感，人很难理性。" },
  { id: 57, category: Category.Education, title: "不逼孩子“卷”", description: "父母不要太卷，不要逼小孩这个那个，要给充分信任。" },
  { id: 58, category: Category.Education, title: "不要求孩子做自己做不到的事", description: "我自己做不到的事情，我不要求小孩。" },
  { id: 59, category: Category.Education, title: "不给孩子无原则的爱", description: "不是溺爱，边界的东西要告诉他，什么东西不能做很重要。" },
  { id: 60, category: Category.Education, title: "不和孩子正面对抗", description: "孩子发脾气说“不爱你”时，不要当真，不要杠上，转移注意力就好。" },
  { id: 61, category: Category.Education, title: "不阻止男孩子哭", description: "男孩子哭一下怎么了？让他哭一会儿就好了，不要压抑他。" },
  { id: 62, category: Category.Education, title: "不在孩子受挫时指责", description: "孩子打不好球已经很生气了，这时候不要骂他，要抱抱他、支持他。" },
  { id: 63, category: Category.Education, title: "不迷信文凭", description: "有文凭不代表有能力，学习能力比文凭重要。" },
  { id: 64, category: Category.Education, title: "不把做题当目的", description: "做题是为了学到方法和逻辑，不是为了做题而做题。" },
  { id: 65, category: Category.Education, title: "不只教知识，要教方法", description: "大学最主要的是学到学习的方法，建立能学会东西的信心。" },

  // --- Personal ---
  { id: 66, category: Category.Personal, title: "不非要干大事", description: "我觉得做普通人、过好小日子就挺好。" },
  { id: 67, category: Category.Personal, title: "不做不喜欢的事", description: "不喜欢的工作要赶紧离开。做自己喜欢做的事情比较开心。" },
  { id: 68, category: Category.Personal, title: "不待在不舒服的地方", description: "北京待着不舒服我就走，广东不合适我也走，不要把自己困住。" },
  { id: 69, category: Category.Personal, title: "不被年龄限制学习", description: "觉得学不会其实跟年龄没关系，是恐惧心理。" },
  { id: 70, category: Category.Personal, title: "不恐惧未知", description: "建立了学习的信心，对未来的恐惧就会少很多。" },
  { id: 71, category: Category.Personal, title: "不跟人比", description: "我并不关心别人想干什么，我想打球就打球，别人想工作就工作。" },
  { id: 72, category: Category.Personal, title: "不要为了退休而退休", description: "不喜欢的事才叫退休，喜欢的叫生活。" },
  { id: 73, category: Category.Personal, title: "不强求别人认同", description: "不懂的人你没法讲，就像跟鱼讲路上行走的乐趣。" },
  { id: 74, category: Category.Personal, title: "不把人形机器人做成人形", description: "机器人不需要像人，做成人形可能没必要。" },
  { id: 75, category: Category.Personal, title: "不排斥新事物", description: "40多岁后觉得自己不能接受新东西，日子会过得很痛苦。" },
  { id: 76, category: Category.Personal, title: "不看扁自己", description: "老师说我不一样时，我真的记住了。暗示和激励很重要。" },
  { id: 77, category: Category.Personal, title: "不因为学历设限", description: "本来不会做生意，也不会打字，学一下很快就学会了。" },
  { id: 78, category: Category.Personal, title: "不该活在别人的剧本里", description: "不要为了所谓的“成就”去活，做自己能够喜欢的事情很重要。" },
  { id: 79, category: Category.Personal, title: "不假装懂", description: "不懂就是不懂。懂了的人不需要问。" },
  { id: 80, category: Category.Personal, title: "不应该没有“不为清单”", description: "人要通过血的教训建立“不为清单”，知道什么不能做，以后就不做了。" },
];

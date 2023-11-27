'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "258718d45204b8f409f665091d394da2",
"assets/AssetManifest.json": "c3572311ea48caa15a439f4107c1ed13",
"assets/assets/images/p1.jpeg": "dc11a285866b9610365a4e6d3ceb6ffa",
"assets/assets/images/p1.jpg": "f94e111313388014922b6dee3960525f",
"assets/assets/images/p2.jpeg": "f793f8bfd45a04238ec6e1efe9f28fb8",
"assets/assets/images/p2.jpg": "b93c80ea1216780b35103a2e0bfa5c74",
"assets/assets/images/p3.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"assets/assets/images/p3.jpg": "b36b658c7c214e5c1db53a904ad2fba2",
"assets/assets/images/p4.jpeg": "02899245ea4c540de8848be2f07bce3f",
"assets/assets/images/p4.jpg": "65702d1eefd65255640f3952a9dd819a",
"assets/assets/images/p5.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"assets/assets/images/p5.jpg": "dd24e7e8c0f303939f0f8dc171523b4f",
"assets/assets/images/p6.jpeg": "c2c97ccde23135ba0271717b6e07c8a5",
"assets/assets/images/p6.jpg": "da786ffea524e444bc5853823ac2f8c6",
"assets/assets/images/s1.jpeg": "072fd317505cdc8965f71bd7dbe0aa2f",
"assets/assets/images/s1.jpg": "046a362e261ed8cc528dcfc55e281725",
"assets/assets/images/s2.jpeg": "45999084cf71cdfa3c1174e3141290bc",
"assets/assets/images/s2.jpg": "a2e4bc8adcd92cb0d4b2277d95c89a4c",
"assets/assets/images/s3.jpeg": "c3e7b18f84ebf4e3ec45a15e680d2ccf",
"assets/assets/images/s3.jpg": "9eb8a1dca10468eaa990cf45209e8656",
"assets/assets/images/s4.jpeg": "bd1d878400dd7d6584b44e46cc411379",
"assets/assets/images/s4.jpg": "f94e111313388014922b6dee3960525f",
"assets/assets/images/splash.png": "84f2c14db7924a73daad5bed668f0100",
"assets/assets/images/y.jpeg": "3891c9633b0713294e6d0b59dce18e0a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "90b6a37deffb16d11f07dbb50d8c6cdd",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github.io/.git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"github.io/.git/config": "afd592d9086aecc2f70d9f68eaf38611",
"github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"github.io/.git/index": "c7288ca38ca3d965613b8ee5baa8ce5a",
"github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"github.io/.git/logs/HEAD": "aaa406b954089cdd508b056f26d28cb3",
"github.io/.git/logs/refs/heads/main": "b1d552c6fc714094e6d0c7231525ce1f",
"github.io/.git/logs/refs/remotes/origin/main": "e1cd43fc191786535ec4a15393db7d16",
"github.io/.git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
"github.io/.git/objects/0d/aad886467300b472adb18234e850a9a440a95c": "ae5cbd62e35d8814e761379d239e638e",
"github.io/.git/objects/0f/5bd9ee41a02841bd6c4b89a78468bacf37ab09": "d1ac77e8e22c1cc34db0e5e4b4d38a0f",
"github.io/.git/objects/13/6fa4e5cebc48db827fd40f4e0d7af21428cf12": "113f5cf731a05ddba194d6bf57a3119f",
"github.io/.git/objects/14/7bf8fb81fc396237d1a29383dbb2ae02355ce6": "ff2a78969a4f9756dfc9fc0403fd580c",
"github.io/.git/objects/1c/7d2c9f231faeab7c0a7974c9d2ebe4ba0159f3": "7caef1e86b0d925f74f57bec2687fc4b",
"github.io/.git/objects/1d/9bdca969adb3e8ac38884f40ebe0d7f0fb818a": "9221bc786a209c31681fdf5d97ba043e",
"github.io/.git/objects/27/870507112b9b8ea5b502561b29892c6fa32443": "22881f4bdd369c4aadb2459bc2aee460",
"github.io/.git/objects/28/9cfeaf8e211f012ebd437d2568972300492d86": "1bd92ff9a318fb57531aa747f66a4416",
"github.io/.git/objects/29/d57fdfb861234f0c71a2f6b35a612bbc1d9f9b": "b387600535ea8972488323d6d73a4c3d",
"github.io/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"github.io/.git/objects/3a/14f7944efe5e9db093da0715e9a01a8955affc": "eb34c257649bcbe0fa7112395c17a962",
"github.io/.git/objects/3e/9c2283b7b0a34abd1ab2cbcb0103accbe12457": "51917fa197a60ec4c77f24c3775ac411",
"github.io/.git/objects/3f/629d8f806ffca2b02d705af8814e938da9015a": "b6f262ec0ba713839c015ff4e85bb217",
"github.io/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"github.io/.git/objects/49/7dd4156e6fbfc21fb70f2676d1a63db05d9054": "9dda4b48b0244376d13b3c19b5314ac5",
"github.io/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"github.io/.git/objects/5b/24c540f5f4b1c987b654d24e13dafdb3ba9b04": "aa04ccfc93e5efb540157f367ccd5cfc",
"github.io/.git/objects/5e/cda57c24bc7f67687d9228893b57d4f4f03d3b": "86c9353caa96a4e468f6b2adad1a806e",
"github.io/.git/objects/66/12967987d8172b35140d6d2431158e52c649fa": "d8b85f65468bca6a6b8f5e54dfd14359",
"github.io/.git/objects/6e/adde2d8b7c51a68e8351d2e605ee7066e08a1f": "f73ebc7e11220ca55fa81b628324d8c9",
"github.io/.git/objects/76/f1b3c5dc277c27e72e2f65b53f68b386742d07": "92ccf8709d31d6ab06d94a3d0d724c38",
"github.io/.git/objects/80/6101e655cec00a2f6e81498e0496fa134a100d": "e6bf98671e115c636fdd85f636ec2264",
"github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"github.io/.git/objects/92/f517c5d110e53066e0184bef9f33c53acabb03": "1320e0c0be47454ce456c978cbc570db",
"github.io/.git/objects/9c/cc41b8f639237b1c4ccfd9d8799ea792805e3e": "ac3638cba9821378f9c6a88b5a8d020e",
"github.io/.git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
"github.io/.git/objects/9e/ae6e645b03df9e6a9d02e35a6c207ffb3c31bd": "813f1bc266729d5dabbefbf077a43e74",
"github.io/.git/objects/a0/abaebf1186cdd8500f25a8107e15b01a28386e": "2a93ef92825d30e7bab88d684b78dbcb",
"github.io/.git/objects/a1/1c682ee431261a8104ada1b0e89be5a471bac8": "6b2dbef5f108a86a10e7c011321e9482",
"github.io/.git/objects/a1/9d38ca67d000b57bec54ac1ca66f99d3638be3": "27fb04fbff183a518f10532f1d7e4070",
"github.io/.git/objects/a3/20321fe14ccbe37eaa5a4f0843517affbc3d4d": "4b4901e99ec359b3366f569295f90859",
"github.io/.git/objects/a4/955cacf2fb6378b50fd568c3cc49087f0631a5": "1ee33fad71dbaa3b7f9846145f3c0fce",
"github.io/.git/objects/a7/e7f6398aea9e11d2f5b2e5cc416173ff0231db": "4cc696441e10c88c6e5386f7b993d613",
"github.io/.git/objects/ae/42459aa035add34d7e4e8ebaaf5c7de3d2f247": "84aff07b8554278b4468c4ac37fa420e",
"github.io/.git/objects/b5/d30e6a5dc9df25b10de1ff41f0ef6b400cda2d": "3856a13e88263e722471abf3592b3e3b",
"github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"github.io/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"github.io/.git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
"github.io/.git/objects/cb/6311bb9b7de47f9e1c7dfe473fb3c80bedbed0": "1847dfdfceebecbc6757bb0717eb210d",
"github.io/.git/objects/cc/9b0d7942603c6c8e5663b89f581369a02f2c6f": "1efb906784c81c1f875f977f5f081b89",
"github.io/.git/objects/cd/8b0745acf4be60b387ca072a5e7aac5725596a": "d61c21ee210fc6f3634e1c56690fa752",
"github.io/.git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
"github.io/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"github.io/.git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
"github.io/.git/objects/d4/efc650dff8b1de8edde8b7ff21e8c93a4b30f8": "22ec8485f10bd605e6c92ce176dea130",
"github.io/.git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
"github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"github.io/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"github.io/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"github.io/.git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
"github.io/.git/objects/e1/b982908b01faa658cced75ace41fe01a09a36b": "8f89150ad809642a02d30fe979a2a6a0",
"github.io/.git/objects/e2/3360cadaa988c0889843ae813df66541d09f23": "03d1201b313d48d71d5521ec92c12891",
"github.io/.git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
"github.io/.git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
"github.io/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"github.io/.git/objects/e9/853a78060341c6cd06e115567abcb16917aa3c": "65f86d1075fdf334d18283a3cc8c1e47",
"github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"github.io/.git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"github.io/.git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
"github.io/.git/refs/heads/main": "059072e9c25dea5f4656d6c5fe8dffa4",
"github.io/.git/refs/remotes/origin/main": "059072e9c25dea5f4656d6c5fe8dffa4",
"github.io/assets/AssetManifest.bin": "258718d45204b8f409f665091d394da2",
"github.io/assets/AssetManifest.json": "c3572311ea48caa15a439f4107c1ed13",
"github.io/assets/assets/images/p1.jpeg": "dc11a285866b9610365a4e6d3ceb6ffa",
"github.io/assets/assets/images/p1.jpg": "f94e111313388014922b6dee3960525f",
"github.io/assets/assets/images/p2.jpeg": "f793f8bfd45a04238ec6e1efe9f28fb8",
"github.io/assets/assets/images/p2.jpg": "b93c80ea1216780b35103a2e0bfa5c74",
"github.io/assets/assets/images/p3.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"github.io/assets/assets/images/p3.jpg": "b36b658c7c214e5c1db53a904ad2fba2",
"github.io/assets/assets/images/p4.jpeg": "02899245ea4c540de8848be2f07bce3f",
"github.io/assets/assets/images/p4.jpg": "65702d1eefd65255640f3952a9dd819a",
"github.io/assets/assets/images/p5.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"github.io/assets/assets/images/p5.jpg": "dd24e7e8c0f303939f0f8dc171523b4f",
"github.io/assets/assets/images/p6.jpeg": "c2c97ccde23135ba0271717b6e07c8a5",
"github.io/assets/assets/images/p6.jpg": "da786ffea524e444bc5853823ac2f8c6",
"github.io/assets/assets/images/s1.jpeg": "072fd317505cdc8965f71bd7dbe0aa2f",
"github.io/assets/assets/images/s1.jpg": "046a362e261ed8cc528dcfc55e281725",
"github.io/assets/assets/images/s2.jpeg": "45999084cf71cdfa3c1174e3141290bc",
"github.io/assets/assets/images/s2.jpg": "a2e4bc8adcd92cb0d4b2277d95c89a4c",
"github.io/assets/assets/images/s3.jpeg": "c3e7b18f84ebf4e3ec45a15e680d2ccf",
"github.io/assets/assets/images/s3.jpg": "9eb8a1dca10468eaa990cf45209e8656",
"github.io/assets/assets/images/s4.jpeg": "bd1d878400dd7d6584b44e46cc411379",
"github.io/assets/assets/images/s4.jpg": "f94e111313388014922b6dee3960525f",
"github.io/assets/assets/images/splash.png": "84f2c14db7924a73daad5bed668f0100",
"github.io/assets/assets/images/y.jpeg": "3891c9633b0713294e6d0b59dce18e0a",
"github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"github.io/assets/fonts/MaterialIcons-Regular.otf": "90b6a37deffb16d11f07dbb50d8c6cdd",
"github.io/assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"github.io/canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"github.io/canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"github.io/canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"github.io/canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"github.io/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"github.io/canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"github.io/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"github.io/index.html": "2efbb9ef0e2e110a1692e2ee760be375",
"/": "b5a60bc1dc1a4b54e6dc17f3b86aac81",
"github.io/main.dart.js": "e784ac2e45d40bcad58e391675cbe347",
"github.io/manifest.json": "5ea1626ae57cf759beadf3403ea50e12",
"github.io/README.md": "710b939ceeb46b50b2c2385ecfb3d7f3",
"github.io/version.json": "3dedc09de14c2b308369ea0e081303e6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a01f878d5895ed14043300c829d71dfd",
"main.dart.js": "e784ac2e45d40bcad58e391675cbe347",
"manifest.json": "5ea1626ae57cf759beadf3403ea50e12",
"try1/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"try1/.git/config": "524abe879e14748ccc1ebf81dd82260d",
"try1/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"try1/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"try1/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"try1/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"try1/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"try1/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"try1/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"try1/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"try1/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"try1/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"try1/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"try1/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"try1/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"try1/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"try1/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"try1/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"try1/.git/index": "a47b8f4ea3bade6587dfec37b6eafe47",
"try1/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"try1/.git/logs/HEAD": "da737b5a53dce6b4ca63277db7b35d4d",
"try1/.git/logs/refs/heads/main": "0cfe17ceac0132152851aab735a5b2ec",
"try1/.git/logs/refs/remotes/origin/main": "f7f3c98f808a96d5e5aeb80f62aa96b6",
"try1/.git/objects/59/c1e322cba88c86365b8235e3fc2bf1549c0547": "5a5a70f9a4b653b3d0f6dc040e19e772",
"try1/.git/objects/67/c9866dc14d3957a9807d9da30be441f84d098c": "bd659cadaa23459f3acc0ca6d4c58fa1",
"try1/.git/objects/d4/20deb1366b34829ef1a356698eb7ff3e2c11ee": "032e073e67abbd5903e6e7a5993e0d18",
"try1/.git/refs/heads/main": "d851ff3562496809bda151fda7b30f32",
"try1/.git/refs/remotes/origin/main": "d851ff3562496809bda151fda7b30f32",
"try1/assets/AssetManifest.bin": "258718d45204b8f409f665091d394da2",
"try1/assets/AssetManifest.json": "c3572311ea48caa15a439f4107c1ed13",
"try1/assets/assets/images/p1.jpeg": "dc11a285866b9610365a4e6d3ceb6ffa",
"try1/assets/assets/images/p1.jpg": "f94e111313388014922b6dee3960525f",
"try1/assets/assets/images/p2.jpeg": "f793f8bfd45a04238ec6e1efe9f28fb8",
"try1/assets/assets/images/p2.jpg": "b93c80ea1216780b35103a2e0bfa5c74",
"try1/assets/assets/images/p3.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"try1/assets/assets/images/p3.jpg": "b36b658c7c214e5c1db53a904ad2fba2",
"try1/assets/assets/images/p4.jpeg": "02899245ea4c540de8848be2f07bce3f",
"try1/assets/assets/images/p4.jpg": "65702d1eefd65255640f3952a9dd819a",
"try1/assets/assets/images/p5.jpeg": "6b3341aee24f6e06e015c8fc298adb64",
"try1/assets/assets/images/p5.jpg": "dd24e7e8c0f303939f0f8dc171523b4f",
"try1/assets/assets/images/p6.jpeg": "c2c97ccde23135ba0271717b6e07c8a5",
"try1/assets/assets/images/p6.jpg": "da786ffea524e444bc5853823ac2f8c6",
"try1/assets/assets/images/s1.jpeg": "072fd317505cdc8965f71bd7dbe0aa2f",
"try1/assets/assets/images/s1.jpg": "046a362e261ed8cc528dcfc55e281725",
"try1/assets/assets/images/s2.jpeg": "45999084cf71cdfa3c1174e3141290bc",
"try1/assets/assets/images/s2.jpg": "a2e4bc8adcd92cb0d4b2277d95c89a4c",
"try1/assets/assets/images/s3.jpeg": "c3e7b18f84ebf4e3ec45a15e680d2ccf",
"try1/assets/assets/images/s3.jpg": "9eb8a1dca10468eaa990cf45209e8656",
"try1/assets/assets/images/s4.jpeg": "bd1d878400dd7d6584b44e46cc411379",
"try1/assets/assets/images/s4.jpg": "f94e111313388014922b6dee3960525f",
"try1/assets/assets/images/splash.png": "84f2c14db7924a73daad5bed668f0100",
"try1/assets/assets/images/y.jpeg": "3891c9633b0713294e6d0b59dce18e0a",
"try1/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"try1/assets/fonts/MaterialIcons-Regular.otf": "90b6a37deffb16d11f07dbb50d8c6cdd",
"try1/assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"try1/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"try1/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"try1/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"try1/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"try1/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"try1/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"try1/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"try1/index.html": "b5a60bc1dc1a4b54e6dc17f3b86aac81",
"try1/main.dart.js": "e784ac2e45d40bcad58e391675cbe347",
"try1/manifest.json": "5ea1626ae57cf759beadf3403ea50e12",
"try1/README.md": "d024dece840f2245bdd3051ad2d7c57d",
"try1/version.json": "3dedc09de14c2b308369ea0e081303e6",
"version.json": "3dedc09de14c2b308369ea0e081303e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

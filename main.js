import csv from "csvtojson";
import { readFileSync, writeFileSync } from "fs";
import { dump, load } from "js-yaml";

try {
  const template = load(readFileSync("template.yaml", "utf8"));
  const proxy_tl = template.proxies[0];
  template.proxies = [];
  const result = await csv()
    .fromFile("./result.csv")
    .then((json) => json);
  result.forEach((item, index) => {
    let proxy = proxy_tl;
    const [_, server, port] = item["IP:PORT"].split(/\[(.*)\]:/);
    const name = proxy.name + `_${index}`;
    proxy = {
      ...proxy,
      name,
      server,
      port: parseInt(port),
    };
    template.proxies.push(proxy);
    template["proxy-groups"].map((item) => item.proxies.push(proxy.name));
  });
  writeFileSync(`auto-generate-${new Date().toLocaleDateString().replaceAll('/','-')}.yaml`, dump(template, { noRefs: true }));
} catch (error) {
  console.log(error);
}

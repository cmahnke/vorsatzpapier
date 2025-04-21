import { CuttingTable } from "./CuttingTable";

//const patternCollection: URL = new URL("https://vorsatzpapier.projektemacher.org/patterns/collection.json");

const urls = [{ url: "https://vorsatzpapier.projektemacher.org/patterns/collection.json", label: "Sammlung Vorsatzpapier" }];
const generatorElement = document.querySelector<HTMLDivElement>("#generator")!;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cuttingTable = new CuttingTable(generatorElement, true, true, urls);

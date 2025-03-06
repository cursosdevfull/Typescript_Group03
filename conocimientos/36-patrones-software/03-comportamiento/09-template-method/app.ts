import { Data, SucursalArequipa, SucursalLima } from "./template-method";

const dataJSON = [
    {
        title: "Título 1",
        price: 80,
    },
    {
        title: "Título 1",
        price: 70,
    },
    {
        title: "Título 2",
        price: 40,
    },
    {
        title: "Título 2",
        price: 60,
    },
];

const dataXML = `
<sales>
	<book>
		<title>Título 1</title>
		<price>50</price>
	</book>
	<book>
		<title>Título 1</title>
		<price>80</price>
	</book>
	<book>
		<title>Título 1</title>
		<price>70</price>
	</book>
	<book>
		<title>Título 2</title>
		<price>40</price>
	</book>
	<book>
		<title>Título 2</title>
		<price>60</price>
	</book>
</sales>
`;

(async () => {
    const dataRest: Data = new SucursalLima(dataJSON);
    const dataSOAP: Data = new SucursalArequipa(dataXML);

    const results = await Promise.all([dataRest.getSummary(), dataSOAP.getSummary()]);
    console.log(JSON.stringify(results, null, "\t"));
})()
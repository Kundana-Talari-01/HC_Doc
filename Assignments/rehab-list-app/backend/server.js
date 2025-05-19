import express from 'express';
import axios from 'axios';
import cors from 'cors';
import csv from 'csvtojson';

const app = express();
app.use(cors());

app.get('/api/rehab-list', async (req, res) => {
  try {
    const apiUrl = 'https://data.cms.gov/provider-data/api/1/metastore/schemas/dataset/items/7t8x-u3ir?show-reference-ids=false';
    const cmsResponse = await axios.get(apiUrl);

    const distributions = cmsResponse.data?.distribution;

    if (!distributions || !Array.isArray(distributions)) {
      return res.status(500).json({ error: 'Distribution data not found in CMS response' });
    }
    const csvUrl = distributions[0]?.data?.downloadURL;

    if (!csvUrl) {
      return res.status(500).json({ error: 'CSV download URL not found' });
    }

    const csvResponse = await axios.get(csvUrl);
    const jsonData = await csv().fromString(csvResponse.data);

    res.json(jsonData);
  } catch (error) {
    console.error('Error fetching rehab list:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});



import React, { ChangeEvent } from 'react';
import { InlineField, Input, Select, Stack } from '@grafana/ui';
import { QueryEditorProps, SelectableValue } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const metricOptions: Array<SelectableValue<string>> = [
    { label: 'CTR', value: 'CTR' },
    { label: 'SAR', value: 'SAR' },
    { label: 'Patrons', value: 'Patrons' },
    { label: 'Transactions', value: 'Transactions' },
    { label: 'Purge', value: 'Purge' },
    { label: 'Incidents', value: 'Incidents' },
  ];

  const onMetricChange = (selected: SelectableValue<string>) => {
    onChange({ ...query, queryText: selected.value ?? '' });
    onRunQuery();
  };

  const onConstantChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, constant: parseFloat(event.target.value) });
    onRunQuery();
  };

  const onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...query, queryText: event.target.value });
    onRunQuery();
  };

  const { queryText, constant } = query;

  return (
    <Stack gap={0}>
      <InlineField label="Metric Name" labelWidth={16}>
        <Select
          id="metric"
          options={metricOptions}
          onChange={onMetricChange}
          value={metricOptions.find(option => option.value === queryText)}
          placeholder="Select Metric"
          width={30}
        />
      </InlineField>

      <InlineField label="Constant" labelWidth={16}>
        <Input
          id="query-editor-constant"
          onChange={onConstantChange}
          value={constant}
          width={8}
          type="number"
          step="0.1"
        />
      </InlineField>

      <InlineField label="Query Text" labelWidth={16} tooltip="Not used yet">
        <Input
          id="query-editor-query-text"
          onChange={onQueryTextChange}
          value={queryText || ''}
          required
          placeholder="Enter a query"
        />
      </InlineField>
    </Stack>
  );
}

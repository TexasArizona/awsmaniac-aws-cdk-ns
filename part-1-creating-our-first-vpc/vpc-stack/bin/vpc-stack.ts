#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { VpcStackStack } from '../lib/vpc-stack-stack';

const app = new cdk.App();
new VpcStackStack(app, 'VpcStackStack');

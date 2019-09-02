import numpy as np
from matplotlib import pyplot

class AnomalyDetection_derectional:
    def __init__(self,theta):
        self.cor_x =np.cos(theta)
        self.cor_y =np.sin(theta)

        self.data = np.array([self.cor_x,self.cor_y])
        print("この点の直交座標は({0},{1})".format(self.cor_x,self.cor_y))
    
    def e_mean(self,array_x,array_y):
        N = array_x[0].size #サンプルサイズ

        self.e_mean_cor_x = np.sum(array_x[0])/N #アレイの和　x座標
        self.e_mean_cor_y = np.sum(array_y[1])/N #アレイの和　y座標
        
        #平均の正規化定数
        C=np.sqrt(self.e_mean_cor_x**2 + self.e_mean_cor_y**2)

        #平均方向のMLE
        self.mu = np.array([self.e_mean_cor_x/C,self.e_mean_cor_y/C])

        print("このデータの推定平均ベクトルは({0},{1})です。".format(self.e_mean_cor_x/C,self.e_mean_cor_y/C))

    def score(self):
        return 1 - np.dot(self.mu,self.data)

    def graph(self,array_x,array_y):
        plt.scatter(p.e_mean_cor_x,p.e_mean_cor_y,marker='*',s=100)
        plt.scatter(array_x,array_y)
